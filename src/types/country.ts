export interface ICountry {
  id: string;

  imageUrl: string;

  name: string;

  captital: string;

  population: number;

  languages: {
    id: string;

    name: string;
  }[];
}

export interface ICountryState {
  skip: number;
  countries: ICountry[];
}
