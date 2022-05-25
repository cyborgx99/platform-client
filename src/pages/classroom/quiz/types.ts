import {
  LessonContentSentence,
  LessonContentSentencePart,
  LessonSentenceType,
} from 'apollo/graphql/generated.types';

export type ISentenceTypes = Record<LessonSentenceType, JSX.Element>;

export interface IQuizSentenceGapProps {
  parts: LessonContentSentencePart[];
}

export interface IQuizSentenceScrambleProps {
  parts: LessonContentSentencePart[];
  text: string;
  sentenceId: string;
}

export interface IScrambledProps {
  part: LessonContentSentencePart;
  onClick: (part: LessonContentSentencePart) => void;
}

export interface IQuizSentenceMultiProps {
  parts: LessonContentSentencePart[];
  text: string;
}

export interface IQuizMultiAnswerProps {
  part: LessonContentSentencePart;
}

export interface IQuizSentenceProps {
  sentence: LessonContentSentence;
}
