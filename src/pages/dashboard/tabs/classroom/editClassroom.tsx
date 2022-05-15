import { useMutation } from '@apollo/client';
import { UPDATE_CLASSROOM } from 'apollo/graphql';
import {
  Mutation,
  UpdateClassroomInput,
  UpdateLessonContentMutationVariables,
} from 'apollo/graphql/generated.types';
import ResultWrapper from 'components/result';
import React, { useState } from 'react';

import ClassroomForm from './classroomForm';
import { IClassroomFormValues, IUpdateClassroomProps } from './types';
import { classroomFormValidationSchema } from './utils';

const EditClassroom = ({ classroom, onCloseModal }: IUpdateClassroomProps) => {
  const [updateClassroom, { loading, error }] =
    useMutation<
      Pick<Mutation, 'updateClassroom'>,
      UpdateLessonContentMutationVariables
    >(UPDATE_CLASSROOM);
  const [isSuccessShown, setIsSuccessShown] = useState(false);

  const initialClassroomValues: IClassroomFormValues = {
    title: classroom.title,
    notes: classroom.notes ?? '',
    selectedLesson: classroom.lesson,
    selectedStudent: classroom.user,
  };

  const handleUpdate = async (values: IClassroomFormValues) => {
    const inputValues: UpdateClassroomInput = {
      id: classroom.id,
      title: values.title,
      notes: values.notes,
      studentId: values.selectedStudent?.id,
      lessonId: values.selectedLesson?.id,
    };
    const { data } = await updateClassroom({
      variables: {
        input: inputValues,
      },
    });

    if (data?.updateClassroom.id) {
      setIsSuccessShown(true);
    }
  };

  return (
    <ResultWrapper
      onContinue={onCloseModal}
      message='Classroom has been updated!'
      isShown={isSuccessShown}
      type='success'>
      <ClassroomForm
        type='create'
        onSubmit={handleUpdate}
        initialValues={initialClassroomValues}
        validationSchema={classroomFormValidationSchema}
        loading={loading}
        error={error}
      />
    </ResultWrapper>
  );
};

export default EditClassroom;
