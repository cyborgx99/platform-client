import {
  LessonContentSentencePart,
  LessonSentenceType,
} from 'apollo/graphql/generated.types';

export type ISentenceTypes = Record<LessonSentenceType, JSX.Element>;

export interface IQuizSentenceGapProps {
  parts: LessonContentSentencePart[];
}
