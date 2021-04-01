import {all, call} from 'redux-saga/effects';
import {countrySaga} from './country';
import {languageSaga} from './language';

export function* rootSaga() {
  yield all([call(countrySaga), call(languageSaga)]);
}
