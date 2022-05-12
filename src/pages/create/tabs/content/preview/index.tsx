import { useCreateLesson } from 'pages/create/context';
import { LessonContentActionTypes } from 'pages/create/reducer/types';
import React from 'react';
import { ParagraphBase } from 'styles/globalStyles';

import { SentencePreviewContainer } from '../styles';
import GapPreview from './gapPreview';
import MultiPreview from './multiPreview';
import ScramblePreview from './scramblePreview';
import TextPreview from './textPreview';
import { ISentencePreviewProps, PreviewSentenceType } from './types';

const SentencePreview = ({
  sentence,
  index,
  canRemoveSentence,
}: ISentencePreviewProps) => {
  const { dispatch } = useCreateLesson();

  const handleRemoveSentence = () => {
    if (!canRemoveSentence) return;
    dispatch({
      type: LessonContentActionTypes.REMOVE_SENTENCE,
      payload: sentence.id,
    });
  };

  const previewSentence: PreviewSentenceType = {
    Gap: <GapPreview parts={sentence.sentenceParts} />,
    Multi: (
      <MultiPreview text={sentence.text ?? ''} parts={sentence.sentenceParts} />
    ),
    Scramble: <ScramblePreview parts={sentence.sentenceParts} />,
    Text: <TextPreview text={sentence.text ?? ''} />,
    Title: <TextPreview text={sentence.text ?? ''} />,
  };

  return (
    <SentencePreviewContainer onClick={handleRemoveSentence} tabIndex={0}>
      <ParagraphBase $textType='normalText' $textWeight='regular'>
        {index + 1}.
      </ParagraphBase>
      {previewSentence[sentence.sentenceType]}
    </SentencePreviewContainer>
  );
};

export default SentencePreview;
