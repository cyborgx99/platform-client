import { useCreateLesson } from 'pages/createLesson/context';
import { LessonContentActionTypes } from 'pages/createLesson/reducer/types';
import React from 'react';
import { ParagraphBase } from 'styles/globalStyles';

import { SentenceDisplayContainer } from '../styles';
import GapDisplay from './gapDisplay';
import MultiDisplay from './multiDisplay';
import ScrambleDisplay from './scrambleDisplay';
import TextDisplay from './textDisplay';
import { DisplayComponentType, ISentenceDisplayProps } from './types';

const SentenceDisplay = ({ sentence, index }: ISentenceDisplayProps) => {
  const { dispatch } = useCreateLesson();
  const handleRemoveSentence = () => {
    dispatch({
      type: LessonContentActionTypes.REMOVE_SENTENCE,
      payload: sentence.id,
    });
  };

  const displayComponent: DisplayComponentType = {
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
      <ParagraphBase $textType='normalText' $textWeight='regular'>
        {index + 1}.
      </ParagraphBase>
      {displayComponent[sentence.sentenceType]}
    </SentenceDisplayContainer>
  );
};

export default SentenceDisplay;
