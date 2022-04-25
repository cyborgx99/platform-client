import { PartType } from 'apollo/graphql/generated.types';
import React from 'react';

import { SpanWrapper, StyledFormSpan } from '../styles';
import { ITextPreviewProps } from './types';

const TextPreview = ({ text }: ITextPreviewProps) => {
  return (
    <SpanWrapper>
      <StyledFormSpan $type={PartType.Regular}>{text}</StyledFormSpan>
    </SpanWrapper>
  );
};

export default TextPreview;
