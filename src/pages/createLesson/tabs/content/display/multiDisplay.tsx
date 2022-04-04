import React from 'react';

import GapFormSpan from '../forms/gapFormSpan';
import { MultiDisplayContainer } from './styles';
import { IMultiDisplayProps } from './types';

const MultiDisplay = ({ parts, text }: IMultiDisplayProps) => {
  return (
    <MultiDisplayContainer>
      <div>{text}</div>
      {parts.map((part) => {
        return <GapFormSpan key={part.id} data={part} />;
      })}
    </MultiDisplayContainer>
  );
};

export default MultiDisplay;
