import { useQuery } from '@apollo/client';
import { GET_LESSON_IMAGES } from 'apollo/graphql';
import {
  Query,
  QueryGetLessonImagesArgs,
} from 'apollo/graphql/generated.types';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import Card from 'components/card';
import IconComponent from 'components/icon';
import Modal from 'components/modal';
import Spinner from 'components/spinner';
import React, { useState } from 'react';

import CreateImage from './createImage';
import { iconContainerStyle, ImageTabWrapper } from './styles';

const ImageTab = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [limit, _setLimit] = useState(20);
  const { data, loading } = useQuery<
    Pick<Query, 'getLessonImages'>,
    QueryGetLessonImagesArgs
  >(GET_LESSON_IMAGES, {
    variables: {
      offset: 0,
      limit,
    },
  });

  const closeModal = () => {
    setIsModalShown(false);
  };

  const openModal = () => {
    setIsModalShown(true);
  };

  if (loading) return <Spinner type='animated' />;

  return (
    <ImageTabWrapper>
      <Modal onClose={closeModal} isShown={isModalShown}>
        <CreateImage />
      </Modal>
      <IconComponent
        onClick={openModal}
        iconContainerStyle={iconContainerStyle}
        title='Add lesson'
        Svg={Plus}
      />
      {data?.getLessonImages.data.map(
        (lessonImage) =>
          lessonImage && (
            <Card
              key={lessonImage.id}
              onLeftClick={() => {
                console.log(123);
              }}
              onRightClick={() => {
                console.log(123);
              }}
              imageUrl={lessonImage.url}
              imageAlt='Lesson image'
              cardTitle={lessonImage.title}
            />
          )
      )}
    </ImageTabWrapper>
  );
};

export default ImageTab;
