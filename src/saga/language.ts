import {select, put, takeEvery} from 'redux-saga/effects';
import {
  GetLanguageByIdActionType,
  LanguageActionTypeEnum,
} from '../actions/type/language';
import {selectLanguages} from '../selectors/language';
import {ILanguage} from '../types/language';
import {getLanguageById} from '../graphql/country';
import {addLanguageAction} from '../actions/language';

function* getLanguage(action: GetLanguageByIdActionType) {
  const {id} = action;
  const languages: ILanguage[] = yield select(selectLanguages);
  const exist = languages.some(l => l.name === id);
  if (exist) {
    return;
  }
  const language = yield getLanguageById(id);
  if (!language) {
    return;
  }
  yield put(addLanguageAction(language));
}

export function* languageSaga() {
  yield takeEvery(LanguageActionTypeEnum.GET_LANGUAGE, getLanguage);
}
