import React from 'react';

import FormSpan from '../sentenceForms/formSpan';
import { SpanWrapper } from '../styles';
import { ISentencePreviewPartsProps } from './types';

const GapPreview = ({ parts }: ISentencePreviewPartsProps) => {
  return (
    <SpanWrapper>
      {parts.map((part) => {
        return <FormSpan key={part.id} data={part} />;
      })}
    </SpanWrapper>
  );
};

export default GapPreview;
