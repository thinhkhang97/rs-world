import {all, call} from 'redux-saga/effects';
import {countrySaga} from './country';

export function* rootSaga() {
  yield all([call(countrySaga)]);
}
