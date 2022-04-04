import React from 'react';

import { ITextDisplayProps } from './types';

const TextDisplay = ({ text }: ITextDisplayProps) => {
  return <div>{text}</div>;
};

export default TextDisplay;
