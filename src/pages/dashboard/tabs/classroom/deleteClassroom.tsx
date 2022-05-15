import { useMutation } from '@apollo/client';
import {
  Mutation,
  MutationDeleteClassroomArgs,
} from 'apollo/graphql/generated.types';
import { DELETE_CLASSROOM } from 'apollo/graphql/mutations/classroom/deleteClassroom';
import ApolloErrorMessage from 'components/apolloErrorMessage';
import ButtonComponent from 'components/button';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { DeleteClassroomWrapper } from './styles';
import { IDeleteClassroomProps } from './types';

const DeleteClassroom = ({
  onCloseModal,
  classroom,
}: IDeleteClassroomProps) => {
  const [deleteClassroom, { loading, error }] =
    useMutation<Pick<Mutation, 'deleteClassroom'>, MutationDeleteClassroomArgs>(
      DELETE_CLASSROOM
    );
  const { t } = useTranslation();

  const handleDelete = async () => {
    const { data } = await deleteClassroom({
      variables: {
        id: classroom.id,
      },
    });

    if (data?.deleteClassroom.id) {
      onCloseModal();
    }
  };

  return (
    <DeleteClassroomWrapper>
      <ButtonComponent
        onClick={handleDelete}
        width='full'
        isLoading={loading}
        type='button'
        variant='danger'>
        {t('pages.create.confirmDelete')}
      </ButtonComponent>
      <ApolloErrorMessage error={error} />
    </DeleteClassroomWrapper>
  );
};

export default DeleteClassroom;
