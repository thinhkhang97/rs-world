import {LanguageActionType, LanguageActionTypeEnum} from './type/language';
import {ILanguage} from '../types/language';

export const getLanguageByIdAction = (id: string): LanguageActionType => {
  return {
    id,
    type: LanguageActionTypeEnum.GET_LANGUAGE,
  };
};

export const addLanguageAction = (language: ILanguage): LanguageActionType => {
  return {
    language,
    type: LanguageActionTypeEnum.ADD_LANGUAGE,
  };
};
