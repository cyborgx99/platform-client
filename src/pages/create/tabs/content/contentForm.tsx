import { LessonSentenceType } from 'apollo/graphql/generated.types';
import ApolloErrorMesage from 'components/apolloErrorMessage';
import ButtonComponent from 'components/button';
import RegularInput from 'components/input/regularInput';
import ResultWrapper from 'components/result';
import ToggleButton from 'components/toggleButton';
import { useCreateLesson } from 'pages/create/context';
import { LessonContentActionTypes } from 'pages/create/reducer/types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderThreeBase, SpanBase } from 'styles/globalStyles';

import SentencePreview from './preview';
import GapForm from './sentenceForms/gapForm';
import MultiForm from './sentenceForms/multiForm';
import ScrambleForm from './sentenceForms/scrambleForm';
import TextForm from './sentenceForms/textForm';
import {
  CreateContentWrapper,
  DisplaySentencesWrapper,
  MultiInputsWrapper,
} from './styles';
import { FormTypes, IContentFormProps } from './types';

const options = Object.values(LessonSentenceType);

const sentenceForms: FormTypes = {
  Gap: <GapForm />,
  Multi: <MultiForm />,
  Scramble: <ScrambleForm />,
  Text: <TextForm />,
  Title: <TextForm />,
};

const maxTitleLength = 32;

const ContentForm = ({
  onContinue,
  isSuccessShown,
  successMessage,
  loading,
  title,
  onTitleChange,
  onButtonClick,
  error,
}: IContentFormProps) => {
  const { toggleValue, dispatch, sentences } = useCreateLesson();
  const { t } = useTranslation();
  const isSaveSentencesDisabled = sentences.length === 0 || !title;

  const handleToggle = (value: LessonSentenceType) => {
    dispatch({
      type: LessonContentActionTypes.CHANGE_LESSON_SENTENCE_TYPE,
      payload: value,
    });
  };

  return (
    <ResultWrapper
      onContinue={onContinue}
      message={successMessage}
      isShown={isSuccessShown}
      type='success'>
      <CreateContentWrapper>
        <ToggleButton<LessonSentenceType>
          options={options}
          currentValue={toggleValue}
          onSetValue={handleToggle}
        />
        {sentenceForms[toggleValue]}
        <DisplaySentencesWrapper>
          {sentences.length > 0 && (
            <HeaderThreeBase>
              {t('pages.createLesson.createdSentences')}
            </HeaderThreeBase>
          )}
          {sentences.map((sentence, i) => (
            <SentencePreview
              canRemoveSentence
              index={i}
              key={sentence.id}
              sentence={sentence}
            />
          ))}
        </DisplaySentencesWrapper>
        <HeaderThreeBase>
          {t('pages.createLesson.enterContentTitle')}
        </HeaderThreeBase>
        <MultiInputsWrapper>
          <SpanBase
            $textType='normalText'
            $textWeight='medium'>{`${title.length} / ${maxTitleLength}`}</SpanBase>
          <RegularInput
            maxLength={maxTitleLength}
            title='Content title'
            onChange={onTitleChange}
            value={title}
          />
        </MultiInputsWrapper>
        <ButtonComponent
          disabled={isSaveSentencesDisabled}
          isLoading={loading}
          width='full'
          type='button'
          onClick={onButtonClick}
          variant='primary'>
          {t('pages.createLesson.save')}
        </ButtonComponent>
        <ApolloErrorMesage error={error} />
      </CreateContentWrapper>
    </ResultWrapper>
  );
};

export default ContentForm;
