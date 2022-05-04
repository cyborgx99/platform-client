import React from 'react';

import { paginageClassNamePrefix, StyledAsync } from './styles';
import { INoFormikSelectAsyncProps } from './types';

const DefaultSelectAsync = <Option, Additional>({
  name,
  defaultValue,
  placeholder,
  additional,
  isClearable = false,
  value,
  getOptions,
  getOptionLabel,
  getOptionValue,
  onChange,
}: INoFormikSelectAsyncProps<Option, Additional>) => {
  return (
    <StyledAsync
      classNamePrefix={paginageClassNamePrefix}
      debounceTimeout={200}
      name={name}
      defaultValue={defaultValue}
      defaultOptions
      loadOptions={getOptions}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      onChange={onChange}
      placeholder={placeholder}
      additional={additional}
      isClearable={isClearable}
      value={value}
    />
  );
};

export default DefaultSelectAsync;
