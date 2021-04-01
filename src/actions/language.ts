import {LanguageActionType, LanguageActionTypeEnum} from './type/language';
import {ILanguage} from '../types/language';

export const getLanguageByNameAction = (name: string): LanguageActionType => {
  return {
    name,
    type: LanguageActionTypeEnum.GET_LANGUAGE,
  };
};

export const addLanguageAction = (language: ILanguage): LanguageActionType => {
  return {
    language,
    type: LanguageActionTypeEnum.ADD_LANGUAGE,
  };
};
