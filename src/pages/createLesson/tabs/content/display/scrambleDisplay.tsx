import React from 'react';

import GapFormSpan from '../forms/gapFormSpan';
import { IScrambleDisplayProps } from './types';

const ScrambleDisplay = ({ parts }: IScrambleDisplayProps) => {
  return (
    <>
      {parts.map((part) => {
        return <GapFormSpan key={part.id} data={part} />;
      })}
    </>
  );
};

export default ScrambleDisplay;
