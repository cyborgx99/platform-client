import { SortOrder } from 'apollo/graphql/generated.types';
import { GetOptionsFunction } from 'components/select/types';

import { LimitOption, OrderOption } from './types';

export const limitOptions: LimitOption[] = [
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
    options: limitOptions,
  };
};

export const loadOrderOptions: GetOptionsFunction<OrderOption> = () => {
  return {
    options: orderOptions,
  };
};
