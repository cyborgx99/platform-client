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

export interface ScrambledData {
  type: 'add' | 'remove';
  part: LessonContentSentencePart;
  sentenceId: string;
}
export interface ScrambledEmitData extends ScrambledData {
  roomId: string;
}

export interface MultiData {
  partId: string;
  value: boolean;
}

export interface MultiEmitData extends MultiData {
  roomId: string;
}

export interface GapData {
  value: string;
  partId: string;
}

export interface GapEmitData extends GapData {
  roomId: string;
}
