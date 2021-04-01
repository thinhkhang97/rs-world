import {ICountryState} from './country';
import {ILanguageState} from './language';

export interface IRootState {
  countryState: ICountryState;
  languageState: ILanguageState;
}
