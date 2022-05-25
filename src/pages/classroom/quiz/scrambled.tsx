import React from 'react';

import { QuizScrambled } from './styles';
import { IScrambledProps } from './types';

const Scrambled = ({ part, onClick }: IScrambledProps) => {
  const handleClick = () => {
    onClick(part);
  };
  return <QuizScrambled onClick={handleClick}>{part.part}</QuizScrambled>;
};

export default Scrambled;
