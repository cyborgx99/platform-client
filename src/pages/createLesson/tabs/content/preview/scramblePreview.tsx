import React from 'react';

import FormSpan from '../sentenceForms/formSpan';
import { SpanWrapper } from '../styles';
import { IScramblePreviewProps } from './types';

const ScramblePreview = ({ parts }: IScramblePreviewProps) => {
  return (
    <SpanWrapper>
      {parts.map((part) => {
        return <FormSpan key={part.id} data={part} />;
      })}
    </SpanWrapper>
  );
};

export default ScramblePreview;
