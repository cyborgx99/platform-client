import React from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
      placeholder={placeholder ?? t('pages.select.placeholder')}
      additional={additional}
      isClearable={isClearable}
      value={value}
    />
  );
};

export default DefaultSelectAsync;
