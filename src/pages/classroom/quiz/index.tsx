import React from 'react';

import { IQuizProps } from '../types';
import QuizSentence from './quizSentence';

const Quiz = ({ lessonContent }: IQuizProps) => {
  return (
    <div>
      {lessonContent.sentences.map((sentence) => (
        <QuizSentence key={sentence.id} sentence={sentence} />
      ))}
    </div>
  );
};

export default Quiz;
