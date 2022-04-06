import { useMutation } from '@apollo/client';
import { DELETE_LESSON_CONTENT } from 'apollo/graphql';
import {
  Mutation,
  MutationDeleteLessonContentArgs,
} from 'apollo/graphql/generated.types';
import { GET_LESSON_CONTENTS } from 'apollo/graphql/queries/lesson/getLessonContents';
import ApolloErrorMessage from 'components/apolloErrorMessage';
import ButtonComponent from 'components/button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderThreeBase } from 'styles/globalStyles';

import { CreateContentWrapper } from './styles';
import { IDeleteContentProps } from './types';

const DeleteContent = ({ currentContent, onClose }: IDeleteContentProps) => {
  const { t } = useTranslation();
  const [deleteContent, { loading, error }] = useMutation<
    Pick<Mutation, 'deleteLessonContent'>,
    MutationDeleteLessonContentArgs
  >(DELETE_LESSON_CONTENT, {
    refetchQueries: [GET_LESSON_CONTENTS, 'getLessonContents'],
  });

  const handleDelete = async () => {
    const { data } = await deleteContent({
      variables: {
        id: currentContent.id,
      },
    });

    if (data?.deleteLessonContent.id) {
      onClose();
    }
  };

  return (
    <CreateContentWrapper>
      <HeaderThreeBase>{currentContent.title}</HeaderThreeBase>
      <ButtonComponent
        onClick={handleDelete}
        width='full'
        isLoading={loading}
        type='button'
        variant='danger'>
        {t('pages.createLesson.confirmDelete')}
      </ButtonComponent>
      <ApolloErrorMessage error={error} />
    </CreateContentWrapper>
  );
};

export default DeleteContent;
