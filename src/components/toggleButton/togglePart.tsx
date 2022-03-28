import React from 'react';

import { TogglePartButton } from './styles';
import { IToggleButtonPartProps } from './types';

const TogglePart = <T extends string>({
  value,
  onSetValue,
  currentValue,
}: IToggleButtonPartProps<T>) => {
  const isActive = currentValue === value;
  const onClick = () => {
    onSetValue(value);
  };
  return (
    <TogglePartButton type='button' $isActive={isActive} onClick={onClick}>
      {value}
    </TogglePartButton>
  );
};

export default TogglePart;
