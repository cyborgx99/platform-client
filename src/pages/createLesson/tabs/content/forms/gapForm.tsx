import {
  LessonContentSentence,
  LessonContentSentencePart,
  PartType,
} from 'apollo/graphql/generated.types';
import ButtonComponent from 'components/button';
import { useCreateLesson } from 'pages/createLesson/context';
import { changePartType, createSentence } from 'pages/createLesson/reducer';
import React, { useState } from 'react';
import { HeaderThreeBase } from 'styles/globalStyles';

import { StyledTextArea } from '../styles';
import { LessonContentActionTypes } from '../types';
import GapFormSpan from './gapFormSpan';
import { FormWrapper, GapFormWrapper } from './styles';

const GapForm = () => {
  const [value, setValue] = useState('');
  const [isEditing, setIsEditing] = useState(true);
  const { dispatch, toggleValue } = useCreateLesson();
  const [currentSentence, setCurrentSentence] =
    useState<LessonContentSentence | null>(null);
  const hasGap = currentSentence?.sentenceParts.some(
    (part) => part.partType === PartType.Gap
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleCreateSentence = () => {
    const sentence = createSentence(value, toggleValue);
    setCurrentSentence(sentence);
    setIsEditing((prev) => !prev);
  };

  const handleAddSentence = () => {
    if (!currentSentence) return;
    setIsEditing((prev) => !prev);
    dispatch({
      type: LessonContentActionTypes.ADD_SENTENCE,
      payload: currentSentence,
    });
    setValue('');
  };

  const handleSpanClick = (part: LessonContentSentencePart) => {
    if (!currentSentence) return;
    let newType = PartType.Regular;
    if (part.partType === PartType.Regular) {
      newType = PartType.Gap;
    }

    setCurrentSentence((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        sentenceParts: changePartType(
          currentSentence.sentenceParts,
          part.id,
          newType
        ),
      };
    });
  };

  return (
    <FormWrapper>
      <HeaderThreeBase>Enter a sentence</HeaderThreeBase>
      {isEditing ? (
        <StyledTextArea
          minRows={2}
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <GapFormWrapper>
          {currentSentence?.sentenceParts.map((part) => (
            <GapFormSpan onClick={handleSpanClick} key={part.id} data={part} />
          ))}
        </GapFormWrapper>
      )}
      <ButtonComponent
        disabled={!value}
        width='full'
        shape='rectangle'
        type='button'
        variant='primary'
        onClick={handleCreateSentence}>
        {isEditing ? 'Select a gap' : 'Edit sentence'}
      </ButtonComponent>
      <ButtonComponent
        width='full'
        shape='rectangle'
        disabled={!currentSentence || !hasGap}
        type='button'
        variant='secondary'
        onClick={handleAddSentence}>
        Add sentence
      </ButtonComponent>
    </FormWrapper>
  );
};

export default GapForm;
