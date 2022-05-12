import {
  LessonContentSentence,
  LessonContentSentencePart,
  PartType,
} from 'apollo/graphql/generated.types';
import ButtonComponent from 'components/button';
import TextArea from 'components/textArea';
import { useCreateLesson } from 'pages/create/context';
import { changePartType, createSentence } from 'pages/create/reducer';
import { LessonContentActionTypes } from 'pages/create/reducer/types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderThreeBase } from 'styles/globalStyles';

import { FormWrapper, SpanWrapper } from '../styles';
import FormSpan from './formSpan';

const GapForm = () => {
  const { t } = useTranslation();
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
      <HeaderThreeBase>{t('pages.createLesson.enterSentence')}</HeaderThreeBase>
      {isEditing ? (
        <TextArea title='Sentence' value={value} onChange={handleChange} />
      ) : (
        <SpanWrapper>
          {currentSentence?.sentenceParts.map((part) => (
            <FormSpan onClick={handleSpanClick} key={part.id} data={part} />
          ))}
        </SpanWrapper>
      )}
      <ButtonComponent
        disabled={!value}
        width='full'
        shape='rectangle'
        type='button'
        variant='primary'
        onClick={handleCreateSentence}>
        {isEditing
          ? t('pages.createLesson.selectGap')
          : t('pages.createLesson.editSentence')}
      </ButtonComponent>
      <ButtonComponent
        width='full'
        shape='rectangle'
        disabled={!currentSentence || !hasGap}
        type='button'
        variant='secondary'
        onClick={handleAddSentence}>
        {t('pages.createLesson.addSentence')}
      </ButtonComponent>
    </FormWrapper>
  );
};

export default GapForm;
