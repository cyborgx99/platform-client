import { useCreateLesson } from 'pages/createLesson/context';
import React from 'react';

import { LessonContentActionTypes } from '../types';
import GapDisplay from './gapDisplay';
import MultiDisplay from './multiDisplay';
import ScrambleDisplay from './scrambleDisplay';
import { SentenceDisplayContainer } from './styles';
import TextDisplay from './textDisplay';
import { ISentenceDisplayProps } from './types';

const SentenceDisplay = ({ sentence }: ISentenceDisplayProps) => {
  const { dispatch } = useCreateLesson();
  const handleRemoveSentence = () => {
    dispatch({
      type: LessonContentActionTypes.REMOVE_SENTENCE,
      payload: sentence.id,
    });
  };

  const display = {
    Gap: <GapDisplay parts={sentence.sentenceParts} />,
    Multi: (
      <MultiDisplay text={sentence.text ?? ''} parts={sentence.sentenceParts} />
    ),
    Scramble: <ScrambleDisplay parts={sentence.sentenceParts} />,
    Text: <TextDisplay text={sentence.text ?? ''} />,
    Title: <TextDisplay text={sentence.text ?? ''} />,
  };

  return (
    <SentenceDisplayContainer onClick={handleRemoveSentence} tabIndex={0}>
      {display[sentence.sentenceType]}
    </SentenceDisplayContainer>
  );
};

export default SentenceDisplay;
