import { PartType } from 'apollo/graphql/generated.types';
import React from 'react';

import { StyledFormSpan } from '../styles';
import { ITextPreviewProps } from './types';

const TextPreview = ({ text }: ITextPreviewProps) => {
  return <StyledFormSpan $type={PartType.Regular}>{text}</StyledFormSpan>;
};

export default TextPreview;
