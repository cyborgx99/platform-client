import { useQuery } from '@apollo/client';
import { GET_LESSON_IMAGES } from 'apollo/graphql';
import {
  LessonImage,
  Query,
  QueryGetLessonImagesArgs,
  SortOrder,
} from 'apollo/graphql/generated.types';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import Card from 'components/card';
import IconComponent from 'components/icon';
import RegularInput from 'components/input/regularInput';
import Modal from 'components/modal';
import DefaultSelectAsync from 'components/select';
import { useModalState, useModalStateWithParams } from 'hooks';
import { useDebouncedValue } from 'hooks/useDebouncedValue';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Waypoint } from 'react-waypoint';

import CreateImage from './createImage';
import DeleteImage from './deleteImage';
import EditImage from './editImage';
import { iconContainerStyle, ImagesWrapper, ImageTabWrapper } from './styles';
import { LimitOption, OrderOption } from './types';
import { loadOptions, loadOrderOptions, options, orderOptions } from './utils';

const ImageTab = () => {
  const { t } = useTranslation();
  const createModalState = useModalState();
  const editModalState = useModalStateWithParams<LessonImage>();
  const deleteModalState = useModalStateWithParams<LessonImage>();

  const [lessonImageVariables, setLessonImageVariables] =
    useState<QueryGetLessonImagesArgs>({
      limit: 10,
      search: '',
      offset: 0,
      sortOrder: SortOrder.Asc,
    });
  const debouncedVariables = useDebouncedValue<QueryGetLessonImagesArgs>(
    lessonImageVariables,
    500
  );

  const { data, fetchMore } = useQuery<
    Pick<Query, 'getLessonImages'>,
    QueryGetLessonImagesArgs
  >(GET_LESSON_IMAGES, {
    variables: debouncedVariables,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLessonImageVariables((previousValue) => {
      return {
        ...previousValue,
        search: e.target.value,
      };
    });
  };

  const handleLimitChange = (value: LimitOption | null) => {
    setLessonImageVariables((previousValue) => {
      return {
        ...previousValue,
        limit: value?.value ?? 10,
      };
    });
  };

  const handleOrderChange = (value: OrderOption | null) => {
    setLessonImageVariables((previousValue) => {
      return {
        ...previousValue,
        sortOrder: value?.value ?? SortOrder.Asc,
      };
    });
  };

  const handleFetchMore = async () => {
    if (!data) return;

    const offset = data.getLessonImages.data.length;
    fetchMore({
      variables: {
        offset,
      },
    });
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
        <IconComponent
          onClick={createModalState.openModal}
          iconContainerStyle={iconContainerStyle}
          title='Add image'
          Svg={Plus}
        />
        <RegularInput
          Svg={Search}
          title='Seacrh'
          placeholder={t('pages.createLesson.search')}
          value={lessonImageVariables.search ?? ''}
          onChange={handleSearchChange}
        />
        Show images:
        <DefaultSelectAsync
          name='limit'
          getOptions={loadOptions}
          onChange={handleLimitChange}
          defaultValue={options[0]}
        />
        Sort order:
        <DefaultSelectAsync
          name='sortOrder'
          getOptions={loadOrderOptions}
          onChange={handleOrderChange}
          defaultValue={orderOptions[0]}
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
      <Waypoint onEnter={handleFetchMore} />
    </>
  );
};

export default ImageTab;
