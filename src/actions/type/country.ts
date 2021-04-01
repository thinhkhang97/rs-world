import {ICountry} from 'types/country';

export enum CountryActionTypeEnum {
  GET_COUNTRY = 'COUNTRY_ACTION/GET_COUNTRY',
  ADD_COUNTRY = 'COUNTRY_ACTION/ADD_COUNTRY',
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
