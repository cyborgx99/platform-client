import React from 'react';

import FormSpan from '../forms/formSpan';
import { SpanWrapper } from '../styles';
import { ISentenceDisplayPartsProps } from './types';

const GapDisplay = ({ parts }: ISentenceDisplayPartsProps) => {
  return (
    <SpanWrapper>
      {parts.map((part) => {
        return <FormSpan key={part.id} data={part} />;
      })}
    </SpanWrapper>
  );
};

export default GapDisplay;
