import {
  LessonContentSentence,
  LessonContentSentencePart,
} from 'apollo/graphql/generated.types';

export interface ISentenceDisplayProps {
  sentence: LessonContentSentence;
  index: number;
}

export interface ISentenceDisplayPartsProps {
  parts: LessonContentSentencePart[];
}

export interface IMultiDisplayProps {
  parts: LessonContentSentencePart[];
  text: string;
}

export interface ITextDisplayProps {
  text: string;
}

export interface IScrambleDisplayProps {
  parts: LessonContentSentencePart[];
}
