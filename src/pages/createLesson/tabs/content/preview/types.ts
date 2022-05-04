import {
  LessonContentSentence,
  LessonContentSentencePart,
  LessonSentenceType,
} from 'apollo/graphql/generated.types';

export interface ISentencePreviewProps {
  sentence: LessonContentSentence;
  index: number;
  canRemoveSentence: boolean;
}

export interface ISentencePreviewPartsProps {
  parts: LessonContentSentencePart[];
}

export interface IMultiPreviewProps {
  parts: LessonContentSentencePart[];
  text: string;
}

export interface ITextPreviewProps {
  text: string;
}

export interface IScramblePreviewProps {
  parts: LessonContentSentencePart[];
}

export type PreviewSentenceType = Record<LessonSentenceType, JSX.Element>;
