import ButtonComponent from 'components/button';
import { useCreateLesson } from 'pages/createLesson/context';
import { createSentence } from 'pages/createLesson/reducer';
import React, { useState } from 'react';

import { StyledTextArea } from '../styles';
import { LessonContentActionTypes } from '../types';

const TextForm = () => {
  const [value, setValue] = useState('');
  const { dispatch, toggleValue } = useCreateLesson();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleAddSentence = () => {
    if (!value) return;
    const sentence = createSentence(value, toggleValue);
    dispatch({
      type: LessonContentActionTypes.ADD_SENTENCE,
      payload: sentence,
    });

    setValue('');
  };

  return (
    <div>
      <StyledTextArea
        minRows={2}
        maxRows={4}
        value={value}
        onChange={handleChange}
      />
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

export default TextForm;
