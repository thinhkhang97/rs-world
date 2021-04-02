import {ICountry} from './country';

export interface ILanguage {
  id: string;

  name: string;

  alpha2Code: string;

  countries: ICountry[];
}

export interface ILanguageState {
  languages: ILanguage[];
}
