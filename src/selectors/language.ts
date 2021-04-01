import {IRootState} from '../types/store';
import {ILanguageState, ILanguage} from '../types/language';

const selectLanguageState = (state: IRootState): ILanguageState => {
  return state.languageState;
};

export const selectLanguages = (state: IRootState): ILanguage[] => {
  return selectLanguageState(state).languages;
};
