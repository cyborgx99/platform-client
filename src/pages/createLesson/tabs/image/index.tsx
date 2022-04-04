import { useQuery } from '@apollo/client';
import { GET_LESSON_IMAGES } from 'apollo/graphql';
import {
  Query,
  QueryGetLessonImagesArgs,
} from 'apollo/graphql/generated.types';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import Card from 'components/card';
import IconComponent from 'components/icon';
import RegularInput from 'components/input/regularInput';
import Modal from 'components/modal';
import { useDebouncedValue } from 'hooks/useDebouncedValue';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import CreateImage from './createImage';
import DeleteImage from './deleteImage';
import EditImage from './editImage';
import { iconContainerStyle, ImagesWrapper, ImageTabWrapper } from './styles';

const ImageTab = () => {
  const [isCreateModalShown, setIsCreateModalShown] = useState(false);
  const [isEditModalShown, setIsEditModalShown] = useState(false);
  const [currentImageId, setCurrentImageId] = useState<string>('');
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
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

  const currentImage = data?.getLessonImages.data.find(
    (image) => image?.id === currentImageId
  );

  const openCreateModal = () => {
    setIsCreateModalShown(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalShown(false);
  };

  const openEditModal = (id: string) => {
    setCurrentImageId(id);
    setIsEditModalShown(true);
  };

  const closeEditModal = () => {
    setIsEditModalShown(false);
    setCurrentImageId('');
  };

  const openDeleteModal = (id: string) => {
    setCurrentImageId(id);
    setIsDeleteModalShown(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalShown(false);
    setCurrentImageId('');
  };

  return (
    <>
      <Modal onClose={closeCreateModal} isShown={isCreateModalShown}>
        <CreateImage />
      </Modal>
      <Modal onClose={closeEditModal} isShown={isEditModalShown}>
        {currentImage && <EditImage currentImage={currentImage} />}
      </Modal>
      <Modal onClose={closeDeleteModal} isShown={isDeleteModalShown}>
        {currentImage && (
          <DeleteImage onClose={closeDeleteModal} currentImage={currentImage} />
        )}
      </Modal>
      <ImageTabWrapper>
        <RegularInput
          Svg={Search}
          title='Seacrh'
          placeholder={t('pages.createLesson.search')}
          value={search}
          onChange={handleChange}
        />
        <IconComponent
          onClick={openCreateModal}
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
                data={lessonImage.id}
                key={lessonImage.id}
                onLeftClick={openEditModal}
                onRightClick={openDeleteModal}
                imageUrl={lessonImage.url}
                imageAlt='Lesson image'
                cardTitle={lessonImage.title}
              />
            )
        )}
      </ImagesWrapper>
    </>
  );
};

export default ImageTab;
