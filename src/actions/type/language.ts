import {ILanguage} from '../../types/language';

export enum LanguageActionTypeEnum {
  GET_LANGUAGE = 'LANGUAGE_ACTION/GET_LANGUAGE',
  ADD_LANGUAGE = 'LANGUAGE_ACTION/ADD_LANGUAGE',
}

export type GetLanguageByIdActionType = {
  id: string;
  type: LanguageActionTypeEnum.GET_LANGUAGE;
};

export type AddLanguageActionType = {
  language: ILanguage;
  type: LanguageActionTypeEnum.ADD_LANGUAGE;
};

export type LanguageActionType =
  | GetLanguageByIdActionType
  | AddLanguageActionType;
