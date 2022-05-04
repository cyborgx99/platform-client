import { useField } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SingleValue } from 'react-select';
import { LabelBase } from 'styles/globalStyles';

import DefaultSelectAsync from './';
import { SelectContainer, ValidationErrorMessage } from './styles';
import { ISelectAsyncProps } from './types';

const FormSelectAsync = <
  Option extends Record<string | number | symbol, unknown>,
  Additional
>(
  props: ISelectAsyncProps<Option, Additional>
) => {
  const [{ value }, { error, touched }, { setValue }] = useField(props.name);
  const hasError = Boolean(touched && error);
  const { t } = useTranslation();

  const handleChange = (value: SingleValue<Option>) => {
    setValue(value);
  };

  return (
    <SelectContainer>
      {props.label && (
        <LabelBase $textType='largeText' $textWeight='medium'>
          {props.label}
        </LabelBase>
      )}
      <DefaultSelectAsync<Option, Additional>
        {...props}
        value={value}
        onChange={handleChange}
      />
      <ValidationErrorMessage
        data-cy-error={props.name}
        $textType='normalText'
        $textWeight='regular'>
        {hasError ? t(`errors.${error}`, { min: 2, max: 32 }) : ''}
      </ValidationErrorMessage>
    </SelectContainer>
  );
};

export default FormSelectAsync;
