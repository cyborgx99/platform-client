import React from 'react';

import FormSpan from '../forms/formSpan';
import { SpanWrapper } from '../styles';
import { IScrambleDisplayProps } from './types';

const ScrambleDisplay = ({ parts }: IScrambleDisplayProps) => {
  return (
    <SpanWrapper>
      {parts.map((part) => {
        return <FormSpan key={part.id} data={part} />;
      })}
    </SpanWrapper>
  );
};

export default ScrambleDisplay;
