import {select, put, takeEvery} from 'redux-saga/effects';
import {
  GetLanguageByNameActionType,
  LanguageActionTypeEnum,
} from '../actions/type/language';
import {selectLanguages} from '../selectors/language';
import {ILanguage} from '../types/language';
import {getLanguageByName} from '../graphql/country';
import {addLanguageAction} from '../actions/language';

function* getLanguage(action: GetLanguageByNameActionType) {
  const {name} = action;
  const languages: ILanguage[] = yield select(selectLanguages);
  const exist = languages.some(l => l.name === name);
  if (exist) {
    return;
  }
  const language = yield getLanguageByName(name);
  if (!language) {
    return;
  }
  yield put(addLanguageAction(language));
}

export function* languageSaga() {
  yield takeEvery(LanguageActionTypeEnum.GET_LANGUAGE, getLanguage);
}
