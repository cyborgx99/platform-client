import { useMutation } from '@apollo/client';
import { CREATE_CLASSROOM } from 'apollo/graphql';
import {
  CreateClassroomInput,
  CreateClassroomMutationVariables,
  Mutation,
} from 'apollo/graphql/generated.types';
import ResultWrapper from 'components/result';
import React, { useState } from 'react';

import ClassroomForm from './classroomForm';
import { IClassroomFormValues, ICreateClassroomProps } from './types';
import {
  classroomFormValidationSchema,
  initialClassroomFormValues,
} from './utils';

const CreateClassroom = ({ onCloseModal }: ICreateClassroomProps) => {
  const [createClassroom, { loading, error }] =
    useMutation<
      Pick<Mutation, 'createClassroom'>,
      CreateClassroomMutationVariables
    >(CREATE_CLASSROOM);
  const [isSuccessShown, setIsSuccessShown] = useState(false);

  const handleCreate = async (values: IClassroomFormValues) => {
    console.log('132', values);
    if (!values.selectedLesson) return;

    const inputValues: CreateClassroomInput = {
      title: values.title,
      notes: values.notes,
      studentId: values.selectedStudent?.id,
      lessonId: values.selectedLesson?.id,
    };

    const { data } = await createClassroom({
      variables: {
        input: inputValues,
      },
    });

    if (data?.createClassroom.id) {
      setIsSuccessShown(true);
    }
  };

  return (
    <ResultWrapper
      onContinue={onCloseModal}
      message='Classroom has been created!'
      isShown={isSuccessShown}
      type='success'>
      <ClassroomForm
        type='create'
        onSubmit={handleCreate}
        initialValues={initialClassroomFormValues}
        validationSchema={classroomFormValidationSchema}
        loading={loading}
        error={error}
      />
    </ResultWrapper>
  );
};

export default CreateClassroom;
