import { ApolloError, useMutation } from '@apollo/client';
import { CREATE_LESSON_IMAGE, UPLOAD_FILE } from 'apollo/graphql';
import {
  CreateLessonImageMutationVariables,
  Mutation,
  UploadFileMutationVariables,
} from 'apollo/graphql/generated.types';
import React from 'react';

import ImageForm from './imageForm';
import { IImageFormValues } from './types';
import { imageFormValidationSchema, initialValues } from './utils';

const CreateImage = () => {
  const [createImage, { loading, error }] =
    useMutation<
      Pick<Mutation, 'createLessonImage'>,
      CreateLessonImageMutationVariables
    >(CREATE_LESSON_IMAGE);
  const [uploadImage, { loading: uploadLoading, error: uploadError }] =
    useMutation<Pick<Mutation, 'uploadFile'>, UploadFileMutationVariables>(
      UPLOAD_FILE
    );

  const createLoading = loading || uploadLoading;
  const createError = error || uploadError;

  const handleCreateImage = async (values: IImageFormValues) => {
    const input: {
      url: string | undefined;
      publicId: string | null;
      title: string;
    } = { url: undefined, publicId: null, title: values.title };

    if (values.file && !values.url) {
      const { data } = await uploadImage({
        variables: {
          file: values.file,
        },
      });

      if (!data) throw new ApolloError({ errorMessage: 'UploadError' });

      input.url = data.uploadFile.url;
      input.publicId = data.uploadFile.publicId;
      input.title = values.title;
    } else {
      input.url = values.url;
      input.title = values.title;
    }
    if (!input.url) return;

    const { data: createData } = await createImage({
      variables: {
        input: {
          title: input.title,
          url: input.url,
          publicId: input.publicId,
        },
      },
    });

    return createData?.createLessonImage.id;
  };

  return (
    <ImageForm
      error={createError}
      loading={createLoading}
      onSubmit={handleCreateImage}
      initialValues={initialValues}
      validationSchema={imageFormValidationSchema}
    />
  );
};

export default CreateImage;
