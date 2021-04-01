import {ICountry} from './country';

export interface ILanguage {
  name: string;

  alpha2Code: string;

  countries: ICountry[];
}

export interface ILanguageState {
  languages: ILanguage[];
}
