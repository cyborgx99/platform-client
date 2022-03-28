import React from 'react';

import { TogglerContainer } from './styles';
import TogglePart from './togglePart';
import { IToggleButtonProps } from './types';

const ToggleButton = <T extends string>({
  onSetValue,
  currentValue,
  options,
}: IToggleButtonProps<T>) => {
  return (
    <TogglerContainer>
      {options.map((opt) => (
        <TogglePart<T>
          key={opt}
          currentValue={currentValue}
          value={opt}
          onSetValue={onSetValue}
        />
      ))}
    </TogglerContainer>
  );
};

export default ToggleButton;
