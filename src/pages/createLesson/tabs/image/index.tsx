import { useQuery } from '@apollo/client';
import { GET_LESSON_IMAGES } from 'apollo/graphql';
import {
  LessonImage,
  Query,
  QueryGetLessonImagesArgs,
} from 'apollo/graphql/generated.types';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import Card from 'components/card';
import IconComponent from 'components/icon';
import RegularInput from 'components/input/regularInput';
import Modal from 'components/modal';
import { useModalState, useModalStateWithParams } from 'hooks';
import { useDebouncedValue } from 'hooks/useDebouncedValue';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import CreateImage from './createImage';
import DeleteImage from './deleteImage';
import EditImage from './editImage';
import { iconContainerStyle, ImagesWrapper, ImageTabWrapper } from './styles';

const ImageTab = () => {
  const createModalState = useModalState();
  const editModalState = useModalStateWithParams<LessonImage>();
  const deleteModalState = useModalStateWithParams<LessonImage>();
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState('');
  const debouncedSearch: string = useDebouncedValue<string>(search, 500);
  const { t } = useTranslation();

  console.log(setLimit);

  const { data } = useQuery<
    Pick<Query, 'getLessonImages'>,
    QueryGetLessonImagesArgs
  >(GET_LESSON_IMAGES, {
    variables: {
      offset: 0,
      limit,
      search: debouncedSearch,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Modal {...createModalState} renderContent={() => <CreateImage />} />
      <Modal
        {...editModalState}
        renderContent={({ params }) => <EditImage currentImage={params} />}
      />
      <Modal
        {...deleteModalState}
        renderContent={({ params }) => (
          <DeleteImage
            onClose={deleteModalState.closeModal}
            currentImage={params}
          />
        )}
      />
      <ImageTabWrapper>
        <RegularInput
          Svg={Search}
          title='Seacrh'
          placeholder={t('pages.createLesson.search')}
          value={search}
          onChange={handleChange}
        />
        <IconComponent
          onClick={createModalState.openModal}
          iconContainerStyle={iconContainerStyle}
          title='Add image'
          Svg={Plus}
        />
      </ImageTabWrapper>
      <ImagesWrapper>
        {data?.getLessonImages.data.map(
          (lessonImage) =>
            lessonImage && (
              <Card
                data={lessonImage}
                key={lessonImage.id}
                onLeftClick={editModalState.openModal}
                onRightClick={deleteModalState.openModal}
                imageUrl={lessonImage.url}
                cardTitle={lessonImage.title}
              />
            )
        )}
      </ImagesWrapper>
    </>
  );
};

export default ImageTab;
