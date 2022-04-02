import {
  LessonContentSentencePart,
  PartType,
} from 'apollo/graphql/generated.types';
import { v4 as uuid } from 'uuid';

import {
  ILessonContentContextValues,
  LessonContentAction,
  LessonContentActionTypes,
} from '../tabs/content/types';

export const createSentence = (value: string): LessonContentSentencePart[] => {
  const arrayOfParts = value.split(' ');
  const sentence = arrayOfParts.map<LessonContentSentencePart>((part) => {
    return {
      part: part,
      partType: PartType.Regular,
      id: uuid(),
    };
  });
  return sentence;
};

export const changePartType = (
  sentence: LessonContentSentencePart[],
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

export const lessonContentReducer = (
  state: ILessonContentContextValues,
  action: LessonContentAction
): ILessonContentContextValues => {
  switch (action.type) {
    case LessonContentActionTypes.CREATE_SENTENCE:
      return {
        ...state,
        currentSentence: {
          id: uuid(),
          sentence: createSentence(action.payload),
          sentenceType: state.toggleValue,
        },
      };
    case LessonContentActionTypes.CHANGE_TYPE:
      return {
        ...state,
        currentSentence: {
          ...state.currentSentence,
          sentence: changePartType(
            state.currentSentence.sentence,
            action.payload.id,
            action.payload.newType
          ),
        },
      };
    default:
      return state;
  }
};
