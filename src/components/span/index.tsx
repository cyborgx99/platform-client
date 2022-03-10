import React from 'react';

import { StyledSpan } from './styles';
import { StyledSpanProps } from './types';

const TextSpan = ({
  children,
  textType = 'regularText',
  textColor = 'dark',
}: StyledSpanProps) => {
  return (
    <StyledSpan $textColor={textColor} $textType={textType}>
      {children}
    </StyledSpan>
  );
};

export default TextSpan;
