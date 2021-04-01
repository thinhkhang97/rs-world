import gql from 'graphql-tag';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {GRAPHQL_URI, getCountryFlagUrl} from '../config';
import {ICountry} from '../types/country';

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
        name
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

  languages: {name: string}[];
}

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
      (c: ICountryResponse): ICountry => ({
        id: c.id,
        name: c.name,
        population: c.population,
        imageUrl: getCountryFlagUrl(c.alpha2Code),
        captital: (c.capital && c.capital.name) || '',
        languages: (c.languages || []).map(l => l.name),
      }),
    );
  } catch (e) {
    console.log(e);
    return [];
  }
};
