import {IRootState} from '../types/store';
import {ICountryState, ICountry} from '../types/country';

const selectCountryState = (state: IRootState): ICountryState => {
  return state.countryState;
};

export const selectCountries = (state: IRootState): ICountry[] => {
  return selectCountryState(state).countries;
};
