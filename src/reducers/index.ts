import {combineReducers} from 'redux';

import {countryState} from './country';
import {languageState} from './language';
import {IRootState} from '../types/store';

export const rootReducer = combineReducers<IRootState>({
  countryState,
  languageState,
});
