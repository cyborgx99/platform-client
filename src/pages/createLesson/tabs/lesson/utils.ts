import { stringRequiredMinMax } from 'utils/validation';
import * as yup from 'yup';

import { ILessonFormValidationSchema } from './types';

export const lessonFormValidationSchema: ILessonFormValidationSchema = yup
  .object()
  .shape({
    title: stringRequiredMinMax,
    description: stringRequiredMinMax,
    selectedImage: yup.object().default(null).nullable(true),
    selectedContent: yup.object().default(null).nullable(true),
    pages: yup.array(),
  });
