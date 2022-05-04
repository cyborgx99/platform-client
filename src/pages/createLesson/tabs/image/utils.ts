import { SortOrder } from 'apollo/graphql/generated.types';
import { GetOptionsFunction } from 'components/select/types';
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
  LimitOption,
  OrderOption,
} from './types';

export const imageFormOptions: ImageFormOptions = ['url', 'upload'];

export const initialValues: IImageFormValues = {
  url: '',
  file: null,
  title: '',
};

export const options: LimitOption[] = [
  {
    label: '10',
    value: 10,
  },
  {
    label: '20',
    value: 20,
  },
  {
    label: '30',
    value: 30,
  },
  {
    label: '40',
    value: 40,
  },
  {
    label: '50',
    value: 50,
  },
];

export const orderOptions: OrderOption[] = [
  {
    label: 'Ascending',
    value: SortOrder.Asc,
  },
  {
    label: 'Descending',
    value: SortOrder.Desc,
  },
];

export const loadOptions: GetOptionsFunction<LimitOption> = () => {
  return {
    options: options,
  };
};

export const loadOrderOptions: GetOptionsFunction<OrderOption> = () => {
  return {
    options: orderOptions,
  };
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
