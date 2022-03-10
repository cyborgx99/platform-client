import TextSpan from 'components/span';
import { useField } from 'formik';
import React from 'react';

import { InputContainer, StyledInput, StyledLabel } from './styles';
import { IFormInputProps } from './types';

const FormInput = ({ label = '', type = 'text', name }: IFormInputProps) => {
  const [field, { error, touched }] = useField(name);

  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...field} name={name} type={type} />
      <TextSpan textType='lightText' textColor='error'>
        {touched && error ? error : ''}
      </TextSpan>
    </InputContainer>
  );
};

export default FormInput;
