import ButtonComponent from 'components/button';
import TextArea from 'components/textArea';
import { useCreateLesson } from 'pages/create/context';
import { createSentence } from 'pages/create/reducer';
import { LessonContentActionTypes } from 'pages/create/reducer/types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderThreeBase } from 'styles/globalStyles';

import { FormWrapper } from '../styles';

const TextForm = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const { dispatch, toggleValue } = useCreateLesson();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleAddSentence = () => {
    if (!value) return;
    const sentence = createSentence(value, toggleValue, false, []);
    dispatch({
      type: LessonContentActionTypes.ADD_SENTENCE,
      payload: sentence,
    });
    setValue('');
  };

  return (
    <FormWrapper>
      <HeaderThreeBase>{t('pages.createLesson.enterSentence')}</HeaderThreeBase>
      <TextArea title='Sentence' value={value} onChange={handleChange} />
      <ButtonComponent
        disabled={!value}
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

export default TextForm;
