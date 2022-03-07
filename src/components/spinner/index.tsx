import React from 'react';

import { Loader } from './styles';
import { ISpinnerProps } from './types';

const Spinner = ({ size = 'small' }: ISpinnerProps) => {
  return <Loader $size={size} />;
};

export default Spinner;
