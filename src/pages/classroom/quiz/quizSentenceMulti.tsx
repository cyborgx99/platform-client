import React from 'react';

import QuizMultiAnswer from './quizMultiAnswer';
import { QuizSentenceMultiWrapper } from './styles';
import { IQuizSentenceMultiProps } from './types';

const QuizSentenceMulti = ({ parts, text }: IQuizSentenceMultiProps) => {
  console.log(parts);
  return (
    <>
      <QuizSentenceMultiWrapper>{text}</QuizSentenceMultiWrapper>
      <QuizSentenceMultiWrapper>
        {parts.map((part) => (
          <QuizMultiAnswer key={part.id} part={part} />
        ))}
      </QuizSentenceMultiWrapper>
    </>
  );
};

export default QuizSentenceMulti;
