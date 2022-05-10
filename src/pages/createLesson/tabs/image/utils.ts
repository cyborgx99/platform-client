import {
  mixedRequiredFileSize,
  stringRequiredImageUrl,
  stringRequiredMinMax,
} from 'utils/validation';
import * as yup from 'yup';

import {
  IImageFormValidationSchema,
  IImageFormValues,
  ImageFormOptions,
} from './types';

export const imageFormOptions: ImageFormOptions = ['url', 'upload'];

export const initialValues: IImageFormValues = {
  url: '',
  file: null,
  title: '',
};

export const imageFormValidationSchema: IImageFormValidationSchema = yup
  .object()
  .shape(
    {
      url: yup.string().when('file', {
        is: (file: File) => !file,
        then: stringRequiredImageUrl,
        otherwise: yup.string(),
      }),
      file: yup.mixed().when('url', {
        is: (url: string) => !url,
        then: mixedRequiredFileSize,
        otherwise: yup.mixed(),
      }),
      title: stringRequiredMinMax,
    },
    [['url', 'file']]
  );
