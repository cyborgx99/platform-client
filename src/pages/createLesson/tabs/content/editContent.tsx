import { useMutation } from '@apollo/client';
import { UPDATE_LESSON_CONTENT } from 'apollo/graphql';
import {
  LessonContentSentence,
  Mutation,
  UpdateLessonContentMutationVariables,
} from 'apollo/graphql/generated.types';
import { useCreateLesson } from 'pages/createLesson/context';
import { LessonContentActionTypes } from 'pages/createLesson/reducer/types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { omitTypenameDeep } from 'utils';

import ContentForm from './contentForm';

const EditContent = () => {
  const { t } = useTranslation();
  const { sentences, dispatch, lessonContent } = useCreateLesson();
  const [title, setTitle] = useState(lessonContent?.title ?? '');
  const [updateContent, { error, loading }] = useMutation<
    Pick<Mutation, 'updateLessonContent'>,
    UpdateLessonContentMutationVariables
  >(UPDATE_LESSON_CONTENT);
  const [isSuccessShown, setIsSuccessShown] = useState(false);

  const handleContinue = () => {
    setIsSuccessShown(false);
  };

  console.log(sentences);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleUpdate = async () => {
    if (!lessonContent) return;

    const noTypeNameSentences = sentences.map((sentence) =>
      omitTypenameDeep<LessonContentSentence>(sentence)
    );

    const { data } = await updateContent({
      variables: {
        input: {
          id: lessonContent.id,
          sentences: noTypeNameSentences,
          title,
        },
      },
    });

    if (data?.updateLessonContent.id) {
      dispatch({ type: LessonContentActionTypes.CLEAR_SENTENCES });
      setIsSuccessShown(true);
      setTitle('');
    }
  };

  return (
    <ContentForm
      successMessage={t('pages.lessonContent.createSuccess')}
      onTitleChange={handleTitleChange}
      onContinue={handleContinue}
      onButtonClick={handleUpdate}
      loading={loading}
      error={error}
      title={title}
      isSuccessShown={isSuccessShown}
    />
  );
};

export default EditContent;
