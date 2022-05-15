import { Lesson, User } from 'apollo/graphql/generated.types';
import { stringRequiredMinMax } from 'utils/validation';
import * as yup from 'yup';

import { GetOptionsAdditional, IClassroomFormValues } from './types';

export const initialClassroomFormValues: IClassroomFormValues = {
  title: '',
  selectedLesson: null,
  selectedStudent: null,
  notes: '',
};

export const classroomFormValidationSchema = yup.object({
  title: stringRequiredMinMax,
  notes: yup.string(),
  selectedStudent: yup.object().nullable().default(null),
  selectedLesson: yup.object().nullable().required('required'),
});

export const getLessonOptionValue = (option: Lesson): string => {
  return JSON.stringify(option);
};

export const getLessonOptionLabel = (option: Lesson): string => {
  return option.title;
};

export const getUserOptionValue = (option: User): string => {
  return JSON.stringify(option);
};

export const getUserOptionLabel = (option: User): string => {
  return `${option.lastName} ${option.name}`;
};

export const getOptionsAdditional: GetOptionsAdditional = {
  limit: 5,
  offset: 0,
};
