import React from 'react';

import GapPart from './gap';
import { QuizSentenceGapWrapper } from './styles';
import { IQuizSentenceGapProps } from './types';

const QuizSentenceGap = ({ parts }: IQuizSentenceGapProps) => {
  return (
    <QuizSentenceGapWrapper>
      {parts.map((part) => {
        if (part.partType === 'Gap') {
          return <GapPart key={part.id} part={part} />;
        }
        return <span key={part.id}> {part.part}</span>;
      })}
    </QuizSentenceGapWrapper>
  );
};

export default QuizSentenceGap;
