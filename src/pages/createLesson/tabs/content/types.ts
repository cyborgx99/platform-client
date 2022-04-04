import {
  LessonContentSentence,
  LessonSentenceType,
} from 'apollo/graphql/generated.types';

export interface ILessonContentContextValues {
  toggleValue: LessonSentenceType;
  sentences: LessonContentSentence[];
  dispatch: React.Dispatch<LessonContentAction>;
}

export interface ICreateLessonContextProviderProps {
  children: React.ReactNode;
}

export enum LessonContentActionTypes {
  ADD_SENTENCE = 'ADD_SENTENCE',
  REMOVE_SENTENCE = 'REMOVE_SENTENCE',
  CHANGE_LESSON_SENTENCE_TYPE = 'CHANGE_LESSON_SENTENCE_TYPE',
}

type ChangeLessonSentenceType = {
  type: LessonContentActionTypes.CHANGE_LESSON_SENTENCE_TYPE;
  payload: LessonSentenceType;
};

type AddSentence = {
  type: LessonContentActionTypes.ADD_SENTENCE;
  payload: LessonContentSentence;
};

type RemoveSentence = {
  type: LessonContentActionTypes.REMOVE_SENTENCE;
  payload: string;
};

export type LessonContentAction =
  | AddSentence
  | RemoveSentence
  | ChangeLessonSentenceType;
