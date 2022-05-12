import {
  LessonContentSentencePart,
  PartType,
} from 'apollo/graphql/generated.types';
import ButtonComponent from 'components/button';
import Checkbox from 'components/checkbox';
import RegularInput from 'components/input/regularInput';
import TextArea from 'components/textArea';
import { useLessonContent } from 'pages/create/context';
import { createSentence, removeById } from 'pages/create/reducer';
import { LessonContentActionTypes } from 'pages/create/reducer/types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderThreeBase } from 'styles/globalStyles';
import { v4 as uuid } from 'uuid';

import { FormWrapper, MultiInputsWrapper, SpanWrapper } from '../styles';
import FormSpan from './formSpan';

const MultiForm = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [optionValue, setOptionValue] = useState('');
  const [options, setOptions] =
    useState<LessonContentSentencePart[] | null>(null);
  const [isCorrectOptionChecked, setIsCorrectOptionChecked] = useState(false);
  const { dispatch, toggleValue } = useLessonContent();
  const hasRightAnswer = Boolean(
    options?.some((option) => option.partType === PartType.RightAnswer)
  );
  const isAddDisabled = !options || !hasRightAnswer || !value;

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
      part: optionValue.trim(),
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

    const sentence = createSentence(value, toggleValue, false, options);

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
      <HeaderThreeBase>{t('pages.create.enterSentence')}</HeaderThreeBase>
      <TextArea title='Sentence' value={value} onChange={handleChange} />
      <HeaderThreeBase>{t('pages.create.addOption')}</HeaderThreeBase>
      <MultiInputsWrapper>
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
      </MultiInputsWrapper>
      <HeaderThreeBase>{t('pages.create.options')}</HeaderThreeBase>
      <SpanWrapper>
        {options?.map((part) => (
          <FormSpan onClick={handleRemoveOption} key={part.id} data={part} />
        ))}
      </SpanWrapper>
      <ButtonComponent
        disabled={!optionValue}
        width='full'
        shape='rectangle'
        type='button'
        variant='primary'
        onClick={handleAddOption}>
        {t('pages.create.addOption')}
      </ButtonComponent>
      <ButtonComponent
        disabled={isAddDisabled}
        width='full'
        shape='rectangle'
        type='button'
        variant='secondary'
        onClick={handleAddSentence}>
        {t('pages.create.addSentence')}
      </ButtonComponent>
    </FormWrapper>
  );
};

export default MultiForm;
