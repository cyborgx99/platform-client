import { ApolloError, useMutation } from '@apollo/client';
import {
  GET_LESSON_IMAGES,
  UPDATE_LESSON_IMAGE,
  UPLOAD_FILE,
} from 'apollo/graphql';
import {
  Mutation,
  UpdateLessonImageMutationVariables,
  UploadFileMutationVariables,
} from 'apollo/graphql/generated.types';
import React from 'react';

import ImageForm from './imageForm';
import { IEditImageProps, IImageFormValues, isEditImageForm } from './types';
import { imageFormValidationSchema } from './utils';

const EditImage = ({ currentImage }: IEditImageProps) => {
  const [updateImage, { error, loading }] = useMutation<
    Pick<Mutation, 'updateLessonImage'>,
    UpdateLessonImageMutationVariables
  >(UPDATE_LESSON_IMAGE, {
    refetchQueries: [GET_LESSON_IMAGES, 'getLessonImages'],
  });
  const [uploadImage, { loading: uploadLoading, error: uploadError }] =
    useMutation<Pick<Mutation, 'uploadFile'>, UploadFileMutationVariables>(
      UPLOAD_FILE
    );

  const updateLoading = loading || uploadLoading;
  const updateError = error || uploadError;

  const editImageInitialValues: IImageFormValues = {
    url: currentImage.url,
    publicId: currentImage.publicId,
    file: null,
    title: currentImage.title,
    id: currentImage.id,
  };

  const handleEdit = async (values: IImageFormValues) => {
    if (!isEditImageForm(values)) return;
    const input: {
      url: string | undefined;
      publicId: string | null;
      title: string;
      id: string;
    } = { url: undefined, publicId: null, title: values.title, id: values.id };

    if (values.file) {
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

    const { data: updateImageData } = await updateImage({
      variables: {
        input: input,
      },
    });
    return updateImageData?.updateLessonImage.id;
  };

  return (
    <ImageForm
      type='edit'
      error={updateError}
      loading={updateLoading}
      onSubmit={handleEdit}
      initialValues={editImageInitialValues}
      validationSchema={imageFormValidationSchema}
    />
  );
};

export default EditImage;
