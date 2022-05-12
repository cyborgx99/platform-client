import { useMutation } from '@apollo/client';
import { UPDATE_LESSON_CONTENT } from 'apollo/graphql';
import {
  LessonContentSentence,
  Mutation,
  UpdateLessonContentMutationVariables,
} from 'apollo/graphql/generated.types';
import { GET_LESSON_CONTENTS } from 'apollo/graphql/queries/lesson/getLessonContents';
import { useCreateLesson } from 'pages/create/context';
import { LessonContentActionTypes } from 'pages/create/reducer/types';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { omitTypenameDeep } from 'utils';

import ContentForm from './contentForm';
import { IEditContentProps } from './types';

const EditContent = ({ lessonContent }: IEditContentProps) => {
  const { t } = useTranslation();
  const { sentences, dispatch } = useCreateLesson();
  const [title, setTitle] = useState(lessonContent?.title ?? '');
  const [updateContent, { error, loading }] = useMutation<
    Pick<Mutation, 'updateLessonContent'>,
    UpdateLessonContentMutationVariables
  >(UPDATE_LESSON_CONTENT, {
    refetchQueries: [GET_LESSON_CONTENTS, 'getLessonContents'],
  });
  const [isSuccessShown, setIsSuccessShown] = useState(false);

  const loadSentences = React.useCallback(() => {
    dispatch({
      type: LessonContentActionTypes.LOAD_SENTENCES,
      payload: lessonContent.sentences,
    });
  }, [dispatch, lessonContent.sentences]);

  useEffect(() => {
    loadSentences();
  }, [loadSentences]);

  const handleContinue = () => {
    setIsSuccessShown(false);
  };

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
      successMessage={t('pages.createLesson.createSuccess')}
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
