import { useMutation } from '@apollo/client';
import { CREATE_LESSON } from 'apollo/graphql';
import {
  CreateLessonMutationVariables,
  Mutation,
} from 'apollo/graphql/generated.types';
import React from 'react';

import LessonForm from './lessonForm';
import { ILessonFormValues } from './types';
import { lessonFormValidationSchema } from './utils';

const initialValues: ILessonFormValues = {
  title: '',
  description: '',
  selectedImage: null,
  selectedContent: null,
  pages: [],
};

const CreateLesson = () => {
  const [createLesson, { loading, error }] =
    useMutation<Pick<Mutation, 'createLesson'>, CreateLessonMutationVariables>(
      CREATE_LESSON
    );

  const handleSubmit = async (values: ILessonFormValues) => {
    console.log(values);
    createLesson;
    return '';
  };

  return (
    <LessonForm
      validationSchema={lessonFormValidationSchema}
      type='create'
      loading={loading}
      error={error}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    />
  );
};

export default CreateLesson;
