import { LessonContentSentencePart } from 'apollo/graphql/generated.types';
import React, { useState } from 'react';

import { StyledInput } from './styles';

const GapPart = ({ part }: { part: LessonContentSentencePart }) => {
  const [value, setValue] = useState('');
  console.log(part);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const isCorrect = value.toLowerCase() === part.part.toLowerCase();

  return (
    <StyledInput
      readOnly={isCorrect}
      $isCorrect={isCorrect}
      value={value}
      onChange={onChange}
    />
  );
};

export default GapPart;
