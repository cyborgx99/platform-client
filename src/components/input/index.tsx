import { useField } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LabelBase } from 'styles/globalStyles';

import {
  ErrorMessage,
  InputContainer,
  PreviewImg,
  StyledInput,
} from './styles';
import { IFormInputProps } from './types';

const FormInput = ({
  label = '',
  type = 'text',
  name,
  imagePreview = false,
}: IFormInputProps) => {
  const [field, { error, touched }] = useField(name);
  const { t } = useTranslation();
  const hasError = Boolean(touched && error);

  return (
    <InputContainer>
      {imagePreview && !hasError && (
        <PreviewImg src={field.value} alt='Preview' />
      )}
      <LabelBase $textType='largeText' $textWeight='medium'>
        {label}
      </LabelBase>
      <StyledInput
        src={field.value}
        $hasError={hasError}
        {...field}
        name={name}
        type={type}
      />
      <ErrorMessage
        data-cy-error={name}
        $textType='normalText'
        $textWeight='regular'>
        {hasError ? t(`errors.${error}`, { min: 2, max: 32 }) : ''}
      </ErrorMessage>
    </InputContainer>
  );
};

export default FormInput;
