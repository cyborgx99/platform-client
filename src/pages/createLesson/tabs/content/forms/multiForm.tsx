import {
  LessonContentSentence,
  LessonContentSentencePart,
  LessonSentenceType,
  PartType,
} from 'apollo/graphql/generated.types';
import ButtonComponent from 'components/button';
import Checkbox from 'components/checkbox';
import RegularInput from 'components/input/regularInput';
import { useCreateLesson } from 'pages/createLesson/context';
import { removeById } from 'pages/createLesson/reducer';
import React, { useState } from 'react';
import { HeaderThreeBase } from 'styles/globalStyles';
import { v4 as uuid } from 'uuid';

import { StyledTextArea } from '../styles';
import { LessonContentActionTypes } from '../types';
import GapFormSpan from './gapFormSpan';
import { FormWrapper, GapFormWrapper } from './styles';

const MultiForm = () => {
  const [value, setValue] = useState('');
  const [optionValue, setOptionValue] = useState('');
  const [isCorrectOptionChecked, setIsCorrectOptionChecked] = useState(false);
  const { dispatch } = useCreateLesson();
  const [options, setOptions] =
    useState<LessonContentSentencePart[] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleCheckboxClick = () => {
    setIsCorrectOptionChecked((previous) => !previous);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionValue(e.target.value);
  };

  const handleAddOption = () => {
    const option = {
      id: uuid(),
      part: optionValue,
      partType: isCorrectOptionChecked
        ? PartType.RightAnswer
        : PartType.WrongAnswer,
    };

    setOptions((prev) => {
      return [...(prev ?? []), option];
    });

    setOptionValue('');
  };

  const handleAddSentence = () => {
    if (!options) return;

    const sentence: LessonContentSentence = {
      id: uuid(),
      sentenceType: LessonSentenceType.Multi,
      sentenceParts: options,
      text: value,
    };
    dispatch({
      type: LessonContentActionTypes.ADD_SENTENCE,
      payload: sentence,
    });
    setValue('');
    setOptions(null);
  };

  const handleRemoveOption = (data: LessonContentSentencePart) => {
    setOptions(removeById(options ?? [], data.id));
  };

  return (
    <FormWrapper>
      <HeaderThreeBase>Enter a sentence</HeaderThreeBase>
      <StyledTextArea
        minRows={2}
        maxRows={4}
        value={value}
        onChange={handleChange}
      />
      <HeaderThreeBase>Add an option</HeaderThreeBase>
      <Checkbox
        title='Correct answer'
        isChecked={isCorrectOptionChecked}
        onChange={handleCheckboxClick}
      />
      <RegularInput
        title='option'
        onChange={handleOptionChange}
        value={optionValue}
      />
      <GapFormWrapper>
        {options?.map((part) => (
          <GapFormSpan onClick={handleRemoveOption} key={part.id} data={part} />
        ))}
      </GapFormWrapper>
      <ButtonComponent
        disabled={!optionValue}
        width='full'
        shape='rectangle'
        type='button'
        variant='primary'
        onClick={handleAddOption}>
        Add option
      </ButtonComponent>
      <ButtonComponent
        width='full'
        shape='rectangle'
        type='button'
        variant='secondary'
        onClick={handleAddSentence}>
        Add sentence
      </ButtonComponent>
    </FormWrapper>
  );
};

export default MultiForm;
