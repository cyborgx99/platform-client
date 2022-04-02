import {
  LessonContentSentence,
  LessonSentenceType,
  PartType,
} from 'apollo/graphql/generated.types';

export interface ILessonContentContextValues {
  toggleValue: LessonSentenceType;
  setToggleValue: React.Dispatch<React.SetStateAction<LessonSentenceType>>;
  currentSentence: LessonContentSentence;
  sentences: LessonContentSentence[];
  dispatch: React.Dispatch<LessonContentAction>;
}

export interface ICreateLessonContextProviderProps {
  children: React.ReactNode;
}

export enum LessonContentActionTypes {
  CREATE_SENTENCE = 'CREATE_SENTENCE',
  CHANGE_TYPE = 'CHANGE_TYPE',
}

type CreateSentence = {
  type: LessonContentActionTypes.CREATE_SENTENCE;
  payload: string;
};

type ChangeType = {
  type: LessonContentActionTypes.CHANGE_TYPE;
  payload: {
    id: string;
    newType: PartType;
  };
};

export type LessonContentAction = CreateSentence | ChangeType;
