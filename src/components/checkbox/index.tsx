import React from 'react';

import { DecorativeCheckbox, HiddenCheckbox, StyledLabel } from './styles';
import { ICheckBoxProps } from './types';

const Checkbox = ({ isChecked, onChange, title }: ICheckBoxProps) => {
  return (
    <StyledLabel title={title} htmlFor='checkbox'>
      <HiddenCheckbox id='checkbox' type='checkbox' onChange={onChange} />
      <DecorativeCheckbox $isChecked={isChecked} aria-hidden='true' />
    </StyledLabel>
  );
};

export default Checkbox;
