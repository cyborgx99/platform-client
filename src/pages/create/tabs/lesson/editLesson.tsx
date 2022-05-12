import { useMutation } from '@apollo/client';
import { UPDATE_LESSON } from 'apollo/graphql';
import {
  Mutation,
  UpdateLessonMutationVariables,
} from 'apollo/graphql/generated.types';
import ResultWrapper from 'components/result';
import React, { useState } from 'react';

import LessonForm from './lessonForm';
import {
  IEditLessonProps,
  ILessonFormValues,
  LessonPageFormValues,
} from './types';
import { lessonFormValidationSchema } from './utils';

const EditLesson = ({ onCloseModal, lesson }: IEditLessonProps) => {
  const [isSuccessShown, setIsSuccessShown] = useState(false);

  const [updateLesson, { loading, error }] =
    useMutation<Pick<Mutation, 'updateLesson'>, UpdateLessonMutationVariables>(
      UPDATE_LESSON
    );

  const handleSubmit = async (values: ILessonFormValues) => {
    const pageIds: LessonPageFormValues[] = values.pages.map((page) => {
      return {
        id: page.id,
        lessonContentId: page.lessonContent.id,
        lessonImageId: page.lessonImage.id,
      };
    });

    const data = await updateLesson({
      variables: {
        input: {
          id: lesson.id,
          pages: pageIds,
          title: values.title,
          description: values.description,
          pagesToDelete: values.deletedPages,
        },
      },
    });

    if (data.data?.updateLesson.id) {
      setIsSuccessShown(true);
    }
  };

  const editLessonFormInitialValues: ILessonFormValues = {
    title: lesson.title,
    description: lesson.description,
    selectedImage: null,
    selectedContent: null,
    pages: lesson.pages,
  };

  return (
    <ResultWrapper
      onContinue={onCloseModal}
      message='Lesson has been created!'
      isShown={isSuccessShown}
      type='success'>
      <LessonForm
        validationSchema={lessonFormValidationSchema}
        type='edit'
        loading={loading}
        error={error}
        initialValues={editLessonFormInitialValues}
        onSubmit={handleSubmit}
      />
    </ResultWrapper>
  );
};

export default EditLesson;
