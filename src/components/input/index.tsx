import { useField } from 'formik';
import React from 'react';

import {
  InputContainer,
  StyledError,
  StyledInput,
  StyledLabel,
} from './styles';
import { IFormInputProps } from './types';

const FormInput = ({ label = '', type = 'text', name }: IFormInputProps) => {
  const [field, { error, touched }] = useField(name);

  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...field} name={name} type={type} />
      <StyledError>{touched ? error : ''}</StyledError>
    </InputContainer>
  );
};

export default FormInput;
