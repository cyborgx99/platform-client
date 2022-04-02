import { LessonContentSentencePart } from 'apollo/graphql/generated.types';
import React from 'react';

import { StyledGapSpan } from '../styles';

const GapFormSpan = ({
  data,
  onClick,
}: {
  data: LessonContentSentencePart;
  onClick: (data: LessonContentSentencePart) => void;
}) => {
  const handleClick = () => {
    onClick(data);
  };

  return (
    <StyledGapSpan onClick={handleClick} $type={data.partType}>
      {data.part}
    </StyledGapSpan>
  );
};

export default GapFormSpan;
