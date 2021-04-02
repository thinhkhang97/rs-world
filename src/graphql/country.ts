import gql from 'graphql-tag';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {GRAPHQL_URI, getCountryFlagUrl} from '../config';
import {ICountry} from '../types/country';
import {ILanguage} from '../types/language';

export const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});

const GET_COUNTRY = gql`
  query getCountry($limit: Int, $skip: Int) {
    countries(limit: $limit, skip: $skip) {
      id
      name
      alpha2Code
      population
      capital {
        name
      }
      languages {
        id
        name
      }
    }
  }
`;

const GET_LANGUAGE = gql`
  query getLanguage($id: String) {
    languages(where: {id: {eq: $id}}) {
      id
      name
      countries {
        id
        name
        population
        alpha2Code
        capital {
          name
        }
        languages {
          id
          name
        }
      }
    }
  }
`;

interface ICountryResponse {
  id: string;

  name: string;

  alpha2Code: string;

  population: number;

  capital?: {
    name: string;
  };

  languages: {id: string; name: string}[];
}

interface ILanguageResponse {
  id: string;

  name: string;

  alpha2Code: string;

  countries: ICountryResponse[];
}

const fromCountryResponse = (c: ICountryResponse): ICountry => ({
  id: c.id,
  name: c.name,
  population: c.population,
  imageUrl: getCountryFlagUrl(c.alpha2Code),
  captital: (c.capital && c.capital.name) || '',
  languages: c.languages || [],
});

export const getCountries = async (
  limit: number,
  skip: number,
): Promise<ICountry[]> => {
  try {
    const res = await client.query({
      query: GET_COUNTRY,
      variables: {limit, skip},
    });
    const {countries} = res.data as {countries: ICountryResponse[]};
    return countries.map(
      (c: ICountryResponse): ICountry => fromCountryResponse(c),
    );
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getLanguageById = async (
  id: string,
): Promise<ILanguage | undefined> => {
  try {
    const res = await client.query({query: GET_LANGUAGE, variables: {id}});
    const {languages} = res.data as {languages: ILanguageResponse[]};
    const foundLanguage = languages[0];
    return {
      ...foundLanguage,
      countries: foundLanguage.countries.map(c => fromCountryResponse(c)),
    };
  } catch {
    return;
  }
};
