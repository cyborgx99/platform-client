import { useMutation } from '@apollo/client';
import { CREATE_CLASSROOM } from 'apollo/graphql';
import {
  CreateClassroomMutationVariables,
  Mutation,
} from 'apollo/graphql/generated.types';
import React from 'react';

import ClassroomForm from './classroomForm';
import { IClassroomFormValues, ICreateClassroomProps } from './types';
import {
  classroomFormValidationSchema,
  initialClassroomFormValues,
} from './utils';

const CreateClassroom = ({ onCloseModal }: ICreateClassroomProps) => {
  const [createLesson, { loading, error }] =
    useMutation<
      Pick<Mutation, 'createClassroom'>,
      CreateClassroomMutationVariables
    >(CREATE_CLASSROOM);

  const handleCreate = (values: IClassroomFormValues) => {
    createLesson({
      variables: {
        input: values,
      },
    });
    onCloseModal;
  };

  return (
    <ClassroomForm
      type='create'
      onSubmit={handleCreate}
      initialValues={initialClassroomFormValues}
      validationSchema={classroomFormValidationSchema}
      loading={loading}
      error={error}
    />
  );
};

export default CreateClassroom;
