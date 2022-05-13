import { Lesson, User } from 'apollo/graphql/generated.types';
import { stringRequiredMinMax } from 'utils/validation';
import * as yup from 'yup';

import {
  GetOptionsAdditional,
  IClassroomFormValidationSchema,
  IClassroomFormValues,
} from './types';

export const initialClassroomFormValues: IClassroomFormValues = {
  title: '',
  lessonId: '',
  studentId: '',
  notes: '',
};

export const classroomFormValidationSchema: IClassroomFormValidationSchema =
  yup.object({
    title: stringRequiredMinMax,
    notes: yup.string(),
    studentId: yup.string().uuid(),
    lessonId: yup.string().required().uuid(),
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
