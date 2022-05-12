import {
  LessonContentSentence,
  LessonSentenceType,
} from 'apollo/graphql/generated.types';

export enum LessonContentActionTypes {
  ADD_SENTENCE = 'ADD_SENTENCE',
  REMOVE_SENTENCE = 'REMOVE_SENTENCE',
  CHANGE_LESSON_SENTENCE_TYPE = 'CHANGE_LESSON_SENTENCE_TYPE',
  LOAD_SENTENCES = 'LOAD_SENTENCES',
  CLEAR_SENTENCES = 'CLEAR_SENTENCES',
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

type ClearSentences = {
  type: LessonContentActionTypes.CLEAR_SENTENCES;
};

type LoadSentences = {
  type: LessonContentActionTypes.LOAD_SENTENCES;
  payload: LessonContentSentence[];
};

export type LessonContentAction =
  | AddSentence
  | RemoveSentence
  | ChangeLessonSentenceType
  | ClearSentences
  | LoadSentences;
