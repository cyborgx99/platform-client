import React from 'react';
import { ParagraphBase } from 'styles/globalStyles';

import FormSpan from '../forms/formSpan';
import { MultiDisplayOptionsWrapper, MultiDisplayWrapper } from '../styles';
import { IMultiDisplayProps } from './types';

const MultiDisplay = ({ parts, text }: IMultiDisplayProps) => {
  return (
    <MultiDisplayWrapper>
      <ParagraphBase $textType='normalText' $textWeight='regular'>
        {text}
      </ParagraphBase>
      <MultiDisplayOptionsWrapper>
        {parts.map((part) => {
          return <FormSpan key={part.id} data={part} />;
        })}
      </MultiDisplayOptionsWrapper>
    </MultiDisplayWrapper>
  );
};

export default MultiDisplay;
