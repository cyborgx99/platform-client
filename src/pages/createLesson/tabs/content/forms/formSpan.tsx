import { LessonContentSentencePart } from 'apollo/graphql/generated.types';
import React from 'react';

import { StyledFormSpan } from '../styles';

const FormSpan = ({
  data,
  onClick,
}: {
  data: LessonContentSentencePart;
  onClick?: (data: LessonContentSentencePart) => void;
}) => {
  const handleClick = () => {
    onClick?.(data);
  };

  return (
    <StyledFormSpan onClick={handleClick} $type={data.partType}>
      {data.part}
    </StyledFormSpan>
  );
};

export default FormSpan;
