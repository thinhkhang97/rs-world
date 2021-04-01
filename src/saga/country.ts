import {takeEvery, put} from 'redux-saga/effects';
import {
  GetCountryActionType,
  CountryActionTypeEnum,
} from '../actions/type/country';
import {getCountries} from '../graphql/country';
import {ICountry} from '../types/country';
import {addCountryAction} from '../actions/country';

function* getCountry(action: GetCountryActionType) {
  const countries: ICountry[] = yield getCountries(action.limit, action.skip);
  yield put(addCountryAction(countries));
}

export function* countrySaga() {
  yield takeEvery(CountryActionTypeEnum.GET_COUNTRY, getCountry);
}
