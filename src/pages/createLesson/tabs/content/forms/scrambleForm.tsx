import { LessonContentSentence } from 'apollo/graphql/generated.types';
import ButtonComponent from 'components/button';
import { useCreateLesson } from 'pages/createLesson/context';
import { createSentence } from 'pages/createLesson/reducer';
import React, { useState } from 'react';

import { StyledTextArea } from '../styles';
import { LessonContentActionTypes } from '../types';
import GapFormSpan from './gapFormSpan';
import { GapFormWrapper } from './styles';

const ScrambleForm = () => {
  const [isEditing, setIsEditing] = useState(true);
  const { dispatch, toggleValue } = useCreateLesson();
  const [value, setValue] = useState('');
  const [currentSentence, setCurrentSentence] =
    useState<LessonContentSentence | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleScrambleSentence = () => {
    const sentence = createSentence(value, toggleValue, true);
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

  return (
    <div>
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
            <GapFormSpan key={part.id} data={part} />
          ))}
        </GapFormWrapper>
      )}
      <ButtonComponent
        disabled={!value}
        width='full'
        shape='rectangle'
        type='button'
        variant='primary'
        onClick={handleScrambleSentence}>
        {isEditing ? 'Scramble sentence' : 'Edit sentence'}
      </ButtonComponent>
      <ButtonComponent
        width='full'
        shape='rectangle'
        type='button'
        variant='secondary'
        onClick={handleAddSentence}>
        Add sentence
      </ButtonComponent>
    </div>
  );
};

export default ScrambleForm;
