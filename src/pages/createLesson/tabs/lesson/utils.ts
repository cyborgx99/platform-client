import { stringRequiredMinMax } from 'utils/validation';
import * as yup from 'yup';

import { ILessonFormValidationSchema } from './types';

export const lessonFormValidationSchema: ILessonFormValidationSchema = yup
  .object()
  .shape({
    title: stringRequiredMinMax,
    description: stringRequiredMinMax,
    pages: yup
      .array()
      .of(
        yup.object().shape({
          lessonImageId: stringRequiredMinMax,
          lessonContentId: stringRequiredMinMax,
        })
      )
      .min(1, 'required'),
  });
