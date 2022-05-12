import React from 'react';
import { ParagraphBase } from 'styles/globalStyles';

import FormSpan from '../sentenceForms/formSpan';
import { MultiPreviewOptionsWrapper, MultiPreviewWrapper } from '../styles';
import { IMultiPreviewProps } from './types';

const MultiPreview = ({ parts, text }: IMultiPreviewProps) => {
  return (
    <MultiPreviewWrapper>
      <ParagraphBase $textType='normalText' $textWeight='regular'>
        {text}
      </ParagraphBase>
      <MultiPreviewOptionsWrapper>
        {parts.map((part) => {
          return <FormSpan key={part.id} data={part} />;
        })}
      </MultiPreviewOptionsWrapper>
    </MultiPreviewWrapper>
  );
};

export default MultiPreview;
