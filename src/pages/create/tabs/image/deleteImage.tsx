import { useMutation } from '@apollo/client';
import { DELETE_LESSON_IMAGE, GET_LESSON_IMAGES } from 'apollo/graphql';
import {
  Mutation,
  MutationDeleteLessonImageArgs,
} from 'apollo/graphql/generated.types';
import ApolloErrorMessage from 'components/apolloErrorMessage';
import ButtonComponent from 'components/button';
import { CardHeaderThree, CardImage } from 'components/card/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ContentWrapper } from './styles';
import { IDeleteImageProps } from './types';

const DeleteImage = ({ currentImage, onClose }: IDeleteImageProps) => {
  const { t } = useTranslation();
  const [deleteImage, { loading, error }] = useMutation<
    Pick<Mutation, 'deleteLessonImage'>,
    MutationDeleteLessonImageArgs
  >(DELETE_LESSON_IMAGE, {
    refetchQueries: [GET_LESSON_IMAGES, 'getLessonImages'],
  });

  const handleDelete = async () => {
    const { data } = await deleteImage({
      variables: {
        input: { id: currentImage.id, publicId: currentImage.publicId },
      },
    });

    if (data?.deleteLessonImage.id) {
      onClose();
    }
  };

  return (
    <ContentWrapper>
      <CardImage src={currentImage.url} alt={currentImage.title} />
      <CardHeaderThree>{currentImage.title}</CardHeaderThree>
      <ButtonComponent
        onClick={handleDelete}
        width='full'
        isLoading={loading}
        type='button'
        variant='danger'>
        {t('pages.createLesson.confirmDelete')}
      </ButtonComponent>
      <ApolloErrorMessage error={error} />
    </ContentWrapper>
  );
};

export default DeleteImage;
