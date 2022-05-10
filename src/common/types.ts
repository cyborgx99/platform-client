import { SortOrder } from 'apollo/graphql/generated.types';

export type LimitOption = {
  label: string;
  value: number;
};

export type OrderOption = {
  label: string;
  value: SortOrder;
};
