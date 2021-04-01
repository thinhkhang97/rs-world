import {combineReducers} from 'redux';

import {countryState} from './country';
import {IRootState} from '../types/store';

export const rootReducer = combineReducers<IRootState>({countryState});
