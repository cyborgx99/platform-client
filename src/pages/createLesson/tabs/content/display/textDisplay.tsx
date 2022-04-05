import { PartType } from 'apollo/graphql/generated.types';
import React from 'react';

import { StyledFormSpan } from '../styles';
import { ITextDisplayProps } from './types';

const TextDisplay = ({ text }: ITextDisplayProps) => {
  return <StyledFormSpan $type={PartType.Regular}>{text}</StyledFormSpan>;
};

export default TextDisplay;
