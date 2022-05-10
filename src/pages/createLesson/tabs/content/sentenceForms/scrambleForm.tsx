import { LessonContentSentence } from 'apollo/graphql/generated.types';
import ButtonComponent from 'components/button';
import TextArea from 'components/textArea';
import { useCreateLesson } from 'pages/createLesson/context';
import { createSentence } from 'pages/createLesson/reducer';
import { LessonContentActionTypes } from 'pages/createLesson/reducer/types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderThreeBase } from 'styles/globalStyles';

import { FormWrapper, SpanWrapper } from '../styles';
import FormSpan from './formSpan';

const ScrambleForm = () => {
  const { t } = useTranslation();
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
    <FormWrapper>
      {isEditing ? (
        <>
          <HeaderThreeBase>
            {t('pages.createLesson.enterSentence')}
          </HeaderThreeBase>
          <TextArea title='Sentence' value={value} onChange={handleChange} />
        </>
      ) : (
        <SpanWrapper>
          {currentSentence?.sentenceParts.map((part) => (
            <FormSpan key={part.id} data={part} />
          ))}
        </SpanWrapper>
      )}
      <ButtonComponent
        disabled={!value}
        width='full'
        shape='rectangle'
        type='button'
        variant='primary'
        onClick={handleScrambleSentence}>
        {isEditing
          ? t('pages.createLesson.scrambleSentence')
          : t('pages.createLesson.editSentence')}
      </ButtonComponent>
      <ButtonComponent
        disabled={!currentSentence}
        width='full'
        shape='rectangle'
        type='button'
        variant='secondary'
        onClick={handleAddSentence}>
        {t('pages.createLesson.addSentence')}
      </ButtonComponent>
    </FormWrapper>
  );
};

export default ScrambleForm;
