import React from 'react';

import GapFormSpan from '../forms/gapFormSpan';
import { ISentenceDisplayPartsProps } from './types';

const GapDisplay = ({ parts }: ISentenceDisplayPartsProps) => {
  return (
    <>
      {parts.map((part) => {
        return <GapFormSpan key={part.id} data={part} />;
      })}
    </>
  );
};

export default GapDisplay;
