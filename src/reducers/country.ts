import {ICountryState} from '../types/country';
import {
  CountryActionType,
  CountryActionTypeEnum,
} from '../actions/type/country';

const initState: ICountryState = {
  skip: 0,
  countries: [],
};

export const countryState = (
  state = initState,
  action: CountryActionType,
): ICountryState => {
  switch (action.type) {
    case CountryActionTypeEnum.ADD_COUNTRY: {
      return {
        ...state,
        skip: state.skip + 1,
        countries: state.countries.concat(action.countries),
      };
    }
    default:
      return state;
  }
};
