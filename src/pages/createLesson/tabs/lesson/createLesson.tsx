import { useMutation } from '@apollo/client';
import { CREATE_LESSON } from 'apollo/graphql';
import {
  CreateLessonMutationVariables,
  Mutation,
} from 'apollo/graphql/generated.types';
import ResultWrapper from 'components/result';
import React, { useState } from 'react';

import LessonForm from './lessonForm';
import {
  ICreateLessonProps,
  ILessonFormValues,
  LessonPageFormValues,
} from './types';
import { lessonFormValidationSchema } from './utils';

const initialValues: ILessonFormValues = {
  title: '',
  description: '',
  selectedImage: null,
  selectedContent: null,
  pages: [],
};

const CreateLesson = ({ onCloseModal }: ICreateLessonProps) => {
  const [createLesson, { loading, error }] =
    useMutation<Pick<Mutation, 'createLesson'>, CreateLessonMutationVariables>(
      CREATE_LESSON
    );
  const [isSuccessShown, setIsSuccessShown] = useState(false);

  const handleSubmit = async (values: ILessonFormValues) => {
    const pageIds: LessonPageFormValues[] = values.pages.map((page) => {
      return {
        id: page.id,
        lessonContentId: page.lessonContent.id,
        lessonImageId: page.lessonImage.id,
      };
    });

    const data = await createLesson({
      variables: {
        input: {
          pages: pageIds,
          title: values.title,
          description: values.description,
        },
      },
    });
    if (data.data?.createLesson.id) {
      setIsSuccessShown(true);
    }
  };

  return (
    <ResultWrapper
      onContinue={onCloseModal}
      message='Lesson has been created!'
      isShown={isSuccessShown}
      type='success'>
      <LessonForm
        validationSchema={lessonFormValidationSchema}
        type='create'
        loading={loading}
        error={error}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </ResultWrapper>
  );
};

export default CreateLesson;
