import { GroupBase, SingleValue } from 'react-select';
import { Response } from 'react-select-async-paginate';

export type GetOptionsFunction<Option, Additional = void> = (
  search: string,
  options: readonly (Option | GroupBase<Option>)[],
  additional?: Additional
) =>
  | Response<Option, GroupBase<Option>, Additional>
  | Promise<Response<Option, GroupBase<Option>, Additional>>;

export interface ISelectAsyncProps<Option, Additional> {
  name: string;
  defaultValue?: Option;
  placeholder?: string;
  label?: string;
  additional?: Additional;
  isClearable?: boolean;
  getOptions: GetOptionsFunction<Option, Additional>;
  getOptionLabel?: (option: Option) => string;
  getOptionValue?: (option: Option) => string;
}

export interface INoFormikSelectAsyncProps<Option, Additional>
  extends ISelectAsyncProps<Option, Additional> {
  value?: Option;
  hasError?: boolean;
  onChange: (value: SingleValue<Option> | Option) => void;
  onBlur?: () => void;
}
