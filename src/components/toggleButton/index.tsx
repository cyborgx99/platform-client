import React from 'react';

import { TogglerContainer } from './styles';
import TogglePart from './togglePart';
import { IToggleButtonProps } from './types';

const ToggleButton = ({
  onSetValue,
  currentValue,
  options,
}: IToggleButtonProps) => {
  return (
    <TogglerContainer>
      {options.map((opt) => (
        <TogglePart
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
