import React from 'react';

import { IQuizSentenceProps } from '../types';
import QuizSentenceGap from './quizSentenceGap';
import { ISentenceTypes } from './types';

const QuizSentence = ({ sentence }: IQuizSentenceProps) => {
  console.log(sentence.sentenceType);

  const renderSentences: ISentenceTypes = {
    Gap: <QuizSentenceGap parts={sentence.sentenceParts} />,
    Multi: <>Multi</>,
    Scramble: <>Scramble</>,
    Text: <>Text</>,
    Title: <>Title</>,
  };

  return <div>{renderSentences[sentence.sentenceType]}</div>;
};

export default QuizSentence;
