import {CountryActionType, CountryActionTypeEnum} from './type/country';
import {ICountry} from 'types/country';

export const getCountryAction = (
  limit: number,
  skip: number,
): CountryActionType => {
  return {
    limit,
    skip,
    type: CountryActionTypeEnum.GET_COUNTRY,
  };
};

export const addCountryAction = (countries: ICountry[]): CountryActionType => {
  return {
    countries,
    type: CountryActionTypeEnum.ADD_COUNTRY,
  };
};
