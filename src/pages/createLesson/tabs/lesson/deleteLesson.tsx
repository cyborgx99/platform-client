import { useMutation } from '@apollo/client';
import { DELETE_LESSON } from 'apollo/graphql';
import {
  Mutation,
  MutationDeleteLessonArgs,
} from 'apollo/graphql/generated.types';
import { GET_LESSONS } from 'apollo/graphql/queries/lesson/getLessons';
import ApolloErrorMessage from 'components/apolloErrorMessage';
import ButtonComponent from 'components/button';
import Card from 'components/card';
import React from 'react';
import { useTranslation } from 'react-i18next';

import DisplayLessonPages from './displayLessonPages';
import { DeleteLessonWrapper } from './styles';
import { IDeleteLessonProps } from './types';

const DeleteLesson = ({ onClose, lesson }: IDeleteLessonProps) => {
  const { t } = useTranslation();
  const [deleteLesson, { loading, error }] = useMutation<
    Pick<Mutation, 'deleteLesson'>,
    MutationDeleteLessonArgs
  >(DELETE_LESSON, {
    refetchQueries: [GET_LESSONS, 'getLessons'],
  });

  const handleDelete = async () => {
    const { data } = await deleteLesson({
      variables: {
        id: lesson.id,
      },
    });

    if (data?.deleteLesson.id) {
      onClose();
    }
  };

  return (
    <DeleteLessonWrapper>
      <Card data={lesson} key={lesson.id} cardTitle={lesson.title}>
        {lesson.pages && <DisplayLessonPages pages={lesson.pages} />}
      </Card>
      <ButtonComponent
        onClick={handleDelete}
        width='full'
        isLoading={loading}
        type='button'
        variant='danger'>
        {t('pages.createLesson.confirmDelete')}
      </ButtonComponent>
      <ApolloErrorMessage error={error} />
    </DeleteLessonWrapper>
  );
};

export default DeleteLesson;
