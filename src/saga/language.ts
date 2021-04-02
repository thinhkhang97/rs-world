import {put, takeEvery} from 'redux-saga/effects';
import {
  GetLanguageByIdActionType,
  LanguageActionTypeEnum,
} from '../actions/type/language';
import {getLanguageById} from '../graphql/country';
import {addLanguageAction} from '../actions/language';

function* getLanguage(action: GetLanguageByIdActionType) {
  const {id} = action;
  const language = yield getLanguageById(id);
  if (!language) {
    return;
  }
  yield put(addLanguageAction(language));
}

export function* languageSaga() {
  yield takeEvery(LanguageActionTypeEnum.GET_LANGUAGE, getLanguage);
}
