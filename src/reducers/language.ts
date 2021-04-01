import {ILanguageState} from '../types/language';
import {
  LanguageActionType,
  LanguageActionTypeEnum,
} from '../actions/type/language';

const initState: ILanguageState = {
  languages: [],
};

export const languageState = (
  state = initState,
  action: LanguageActionType,
): ILanguageState => {
  switch (action.type) {
    case LanguageActionTypeEnum.ADD_LANGUAGE: {
      return {...state, languages: state.languages.concat(action.language)};
    }
    default:
      return state;
  }
};
