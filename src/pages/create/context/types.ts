import {
  LessonContent,
  LessonContentSentence,
  LessonSentenceType,
} from 'apollo/graphql/generated.types';

import { LessonContentAction } from '../reducer/types';

export interface ILessonContentContextValues {
  toggleValue: LessonSentenceType;
  lessonContent?: LessonContent;
  sentences: LessonContentSentence[];
  dispatch: React.Dispatch<LessonContentAction>;
}

export interface ILessonContentReducerState {
  toggleValue: LessonSentenceType;
  sentences: LessonContentSentence[];
}

export interface ICreateLessonContextProviderProps {
  children: React.ReactNode;
}
