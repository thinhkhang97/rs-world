import {ICountry} from '../../types/country';

export enum CountryActionTypeEnum {
  GET_COUNTRY = 'COUNTRY_ACTION/GET_COUNTRY',
  GET_COUNTRY_BY_ID = 'COUNTRY_ACTION/GET_COUNTRY_BY_ID',
  ADD_COUNTRY = 'COUNTRY_ACTION/ADD_COUNTRY',
  ADD_COUNTRY_BY_ID = 'COUNTRY_ACTION/ADD_COUNTRY_BY_ID',
}

export type GetCountryActionType = {
  limit: number;
  skip: number;
  type: CountryActionTypeEnum.GET_COUNTRY;
};

export type AddCountryActionType = {
  countries: ICountry[];
  type: CountryActionTypeEnum.ADD_COUNTRY;
};

export type CountryActionType = GetCountryActionType | AddCountryActionType;
