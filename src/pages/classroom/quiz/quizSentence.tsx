import React from 'react';
import { HeaderThreeBase, ParagraphBase } from 'styles/globalStyles';

import QuizSentenceGap from './quizSentenceGap';
import QuizSentenceMulti from './quizSentenceMulti';
import QuizSentenceScramble from './quizSentenceScramble';
import { IQuizSentenceProps, ISentenceTypes } from './types';

const QuizSentence = ({ sentence }: IQuizSentenceProps) => {
  const renderSentences: ISentenceTypes = {
    Gap: <QuizSentenceGap parts={sentence.sentenceParts} />,
    Multi: (
      <QuizSentenceMulti
        text={sentence.text ?? ''}
        parts={sentence.sentenceParts}
      />
    ),
    Scramble: (
      <QuizSentenceScramble
        text={sentence.text ?? ''}
        parts={sentence.sentenceParts}
        sentenceId={sentence.id}
      />
    ),
    Text: (
      <ParagraphBase $textType='largeText' $textWeight='medium'>
        {sentence.text}
      </ParagraphBase>
    ),
    Title: <HeaderThreeBase>{sentence.text}</HeaderThreeBase>,
  };

  return <div>{renderSentences[sentence.sentenceType]}</div>;
};

export default QuizSentence;
