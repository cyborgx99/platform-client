import { useMutation } from '@apollo/client';
import { CREATE_LESSON_CONTENT } from 'apollo/graphql';
import {
  LessonSentenceType,
  Mutation,
  MutationCreateLessonContentArgs,
} from 'apollo/graphql/generated.types';
import ButtonComponent from 'components/button';
import RegularInput from 'components/input/regularInput';
import ResultWrapper from 'components/result';
import ToggleButton from 'components/toggleButton';
import { useCreateLesson } from 'pages/createLesson/context';
import { LessonContentActionTypes } from 'pages/createLesson/reducer/types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderThreeBase, SpanBase } from 'styles/globalStyles';

import SentenceDisplay from './display';
import GapForm from './forms/gapForm';
import MultiForm from './forms/multiForm';
import ScrambleForm from './forms/scrambleForm';
import TextForm from './forms/textForm';
import {
  CreateContentWrapper,
  DisplaySentencesWrapper,
  MultiInputsWrapper,
} from './styles';
import { FormTypes } from './types';

const options = Object.values(LessonSentenceType);

const forms: FormTypes = {
  Gap: <GapForm />,
  Multi: <MultiForm />,
  Scramble: <ScrambleForm />,
  Text: <TextForm />,
  Title: <TextForm />,
};

const maxTitleLength = 32;

const CreateContent = () => {
  const { toggleValue, sentences, dispatch } = useCreateLesson();
  const { t } = useTranslation();
  const [createContent, { loading }] = useMutation<
    Pick<Mutation, 'createLessonContent'>,
    MutationCreateLessonContentArgs
  >(CREATE_LESSON_CONTENT);
  const [title, setTitle] = useState('');
  const [isSuccessShown, setIsSuccessShown] = useState(false);
  const isSaveSentencesDisabled = sentences.length === 0;

  const handleToggle = (value: LessonSentenceType) => {
    dispatch({
      type: LessonContentActionTypes.CHANGE_LESSON_SENTENCE_TYPE,
      payload: value,
    });
  };

  const handleCreate = async () => {
    const { data } = await createContent({
      variables: {
        input: {
          sentences,
          title: '',
        },
      },
    });
    if (data?.createLessonContent.id) {
      dispatch({ type: LessonContentActionTypes.CLEAR_SENTENCES });
      setIsSuccessShown(true);
    }
  };

  const handleContinue = () => {
    setIsSuccessShown(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <ResultWrapper
      onContinue={handleContinue}
      message='Lesson content has been created.'
      isShown={isSuccessShown}
      type='success'>
      <CreateContentWrapper>
        <ToggleButton<LessonSentenceType>
          options={options}
          currentValue={toggleValue}
          onSetValue={handleToggle}
        />
        {forms[toggleValue]}
        <DisplaySentencesWrapper>
          {sentences.length > 0 && (
            <HeaderThreeBase>
              {t('pages.lessonContent.createdSentences')}
            </HeaderThreeBase>
          )}
          {sentences.map((sentence, i) => (
            <SentenceDisplay index={i} key={sentence.id} sentence={sentence} />
          ))}
        </DisplaySentencesWrapper>
        <HeaderThreeBase>
          {t('pages.lessonContent.enterContentTitle')}
        </HeaderThreeBase>
        <MultiInputsWrapper>
          <SpanBase
            $textType='normalText'
            $textWeight='medium'>{`${title.length} / ${maxTitleLength}`}</SpanBase>
          <RegularInput
            maxLength={maxTitleLength}
            title='Content title'
            onChange={handleTitleChange}
            value={title}
          />
        </MultiInputsWrapper>
        <ButtonComponent
          disabled={isSaveSentencesDisabled}
          isLoading={loading}
          width='full'
          type='button'
          onClick={handleCreate}
          variant='primary'>
          {t('pages.lessonContent.save')}
        </ButtonComponent>
      </CreateContentWrapper>
    </ResultWrapper>
  );
};

export default CreateContent;
