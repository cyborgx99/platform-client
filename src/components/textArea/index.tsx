import React from 'react';
import { SpanBase } from 'styles/globalStyles';

import { StyledTextArea, TextAreaWrapper } from './styles';
import { ITextareaProps } from './types';

const TextArea = ({
  value,
  onChange,
  placeholder,
  title,
  hasError = false,
  maxLength = 200,
  minRows = 2,
  maxRows = 4,
}: ITextareaProps) => {
  return (
    <TextAreaWrapper>
      <StyledTextArea
        $hasError={hasError}
        minRows={minRows}
        maxRows={maxRows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        title={title}
        maxLength={maxLength}
      />
      <SpanBase $textType='normalText' $textWeight='medium'>
        {`${value.length} / ${maxLength}`}
      </SpanBase>
    </TextAreaWrapper>
  );
};

export default TextArea;
