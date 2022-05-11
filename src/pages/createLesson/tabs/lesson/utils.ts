import { LessonContent, LessonImage } from 'apollo/graphql/generated.types';
import { stringRequiredMinMax } from 'utils/validation';
import * as yup from 'yup';

import { GetOptionsAdditional, ILessonFormValues } from './types';

export const lessonFormValidationSchema = yup.object().shape({
  title: stringRequiredMinMax,
  description: stringRequiredMinMax,
  selectedImage: yup.object().default(null).nullable(true),
  selectedContent: yup.object().default(null).nullable(true),
  pages: yup.array().min(1, 'required'),
});

export type LessonFormValidationSchema = typeof lessonFormValidationSchema;

export const initialLessonFormValues: ILessonFormValues = {
  title: '',
  description: '',
  selectedImage: null,
  selectedContent: null,
  pages: [],
};

export const getOptionsAdditional: GetOptionsAdditional = {
  limit: 5,
  offset: 0,
};

export const getImageOptionValue = (option: LessonImage): string => {
  return JSON.stringify(option);
};

export const getImageOptionLabel = (option: LessonImage): string => {
  return option.title;
};

export const getContentOptionValue = (option: LessonContent): string => {
  return JSON.stringify(option);
};

export const getContentOptionLabel = (option: LessonContent): string => {
  return option.title;
};
