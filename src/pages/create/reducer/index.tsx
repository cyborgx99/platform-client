import {
  LessonContentSentence,
  LessonContentSentencePart,
  LessonSentenceType,
  PartType,
} from 'apollo/graphql/generated.types';
import { shuffleArray } from 'utils';
import { v4 as uuid } from 'uuid';

import { ILessonContentReducerState } from '../context/types';
import { LessonContentAction, LessonContentActionTypes } from './types';

export const createSentenceParts = (
  value: string,
  shuffle?: boolean
): LessonContentSentencePart[] => {
  const arrayOfParts = value.split(' ');
  const sentenceParts = arrayOfParts.map<LessonContentSentencePart>((part) => {
    return {
      part: part,
      partType: PartType.Regular,
      id: uuid(),
    };
  });

  if (shuffle) {
    return shuffleArray(sentenceParts);
  }

  return sentenceParts;
};

export const createSentence = (
  value: string,
  type: LessonSentenceType,
  shuffle?: boolean,
  parts?: LessonContentSentencePart[]
): LessonContentSentence => {
  const trimmedValue = value.trim();
  const sentence: LessonContentSentence = {
    id: uuid(),
    sentenceParts: parts ? parts : createSentenceParts(trimmedValue, shuffle),
    sentenceType: type,
    text: trimmedValue,
  };

  return sentence;
};

export const changePartType = (
  sentence: LessonContentSentencePart[] = [],
  id: string,
  newType: PartType
): LessonContentSentencePart[] => {
  return sentence.map((part) => {
    if (part.id === id) {
      return {
        ...part,
        partType: newType,
      };
    }
    return part;
  });
};

export const removeById = <T extends { id: string }>(
  array: T[],
  id: string
): T[] => {
  return array.filter((item) => item.id !== id);
};

export const lessonContentReducer = (
  state: ILessonContentReducerState,
  action: LessonContentAction
): ILessonContentReducerState => {
  switch (action.type) {
    case LessonContentActionTypes.LOAD_SENTENCES:
      return {
        ...state,
        sentences: action.payload,
      };

    case LessonContentActionTypes.CHANGE_LESSON_SENTENCE_TYPE:
      return {
        ...state,
        toggleValue: action.payload,
      };

    case LessonContentActionTypes.ADD_SENTENCE:
      return {
        ...state,
        sentences: [...state.sentences, action.payload],
      };

    case LessonContentActionTypes.REMOVE_SENTENCE:
      return {
        ...state,
        sentences: removeById(state.sentences, action.payload),
      };

    case LessonContentActionTypes.CLEAR_SENTENCES:
      return {
        ...state,
        sentences: [],
      };

    default:
      return state;
  }
};
