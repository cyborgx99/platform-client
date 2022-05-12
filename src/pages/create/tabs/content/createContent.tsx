import { useMutation } from '@apollo/client';
import { CREATE_LESSON_CONTENT } from 'apollo/graphql';
import {
  Mutation,
  MutationCreateLessonContentArgs,
} from 'apollo/graphql/generated.types';
import { GET_LESSON_CONTENTS } from 'apollo/graphql/queries/lesson/getLessonContents';
import { useCreateLesson } from 'pages/create/context';
import { LessonContentActionTypes } from 'pages/create/reducer/types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ContentForm from './contentForm';

const CreateContent = () => {
  const { t } = useTranslation();
  const { sentences, dispatch } = useCreateLesson();
  const [createContent, { loading, error }] = useMutation<
    Pick<Mutation, 'createLessonContent'>,
    MutationCreateLessonContentArgs
  >(CREATE_LESSON_CONTENT, {
    refetchQueries: [GET_LESSON_CONTENTS, 'getLessonContents'],
  });
  const [title, setTitle] = useState('');
  const [isSuccessShown, setIsSuccessShown] = useState(false);

  const handleCreate = async () => {
    const { data } = await createContent({
      variables: {
        input: {
          sentences,
          title,
        },
      },
    });

    if (data?.createLessonContent.id) {
      dispatch({ type: LessonContentActionTypes.CLEAR_SENTENCES });
      setIsSuccessShown(true);
      setTitle('');
    }
  };

  const handleContinue = () => {
    setIsSuccessShown(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <ContentForm
      successMessage={t('pages.createLesson.createSuccess')}
      onTitleChange={handleTitleChange}
      onContinue={handleContinue}
      onButtonClick={handleCreate}
      loading={loading}
      error={error}
      title={title}
      isSuccessShown={isSuccessShown}
    />
  );
};

export default CreateContent;
