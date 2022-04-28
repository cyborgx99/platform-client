import { useQuery } from '@apollo/client';
import { GET_LESSON_IMAGES } from 'apollo/graphql';
import {
  LessonImage,
  Query,
  QueryGetLessonImagesArgs,
} from 'apollo/graphql/generated.types';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import Card from 'components/card';
import RegularInput from 'components/input/regularInput';
import SkeletonLoading from 'components/skeleton';
import { useField } from 'formik';
import { useDebouncedValue } from 'hooks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeaderThreeBase } from 'styles/globalStyles';

import { NoItemsWrapper, SelectImageContainer } from './styles';

const SelectImage = () => {
  const { t } = useTranslation();
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState('');
  const debouncedSearch: string = useDebouncedValue<string>(search, 500);
  const [{ value }, , { setValue }] =
    useField<LessonImage | null>('selectedImage');

  console.log(value);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSelectImage = (value: LessonImage) => {
    setValue(value);
  };

  console.log(setLimit);

  const { data, loading } = useQuery<
    Pick<Query, 'getLessonImages'>,
    QueryGetLessonImagesArgs
  >(GET_LESSON_IMAGES, {
    variables: {
      offset: 0,
      limit,
      search: debouncedSearch,
    },
  });

  const hasDataItems = Boolean(data && data.getLessonImages.data.length >= 1);

  return (
    <>
      <RegularInput
        Svg={Search}
        title='Seacrh'
        placeholder={t('pages.createLesson.search')}
        value={search}
        onChange={handleSearchChange}
      />

      <SelectImageContainer>
        {loading ? (
          <SkeletonLoading numberOfLoaders={2} />
        ) : (
          !hasDataItems && (
            <NoItemsWrapper>
              <HeaderThreeBase>No images</HeaderThreeBase>
            </NoItemsWrapper>
          )
        )}
        {data &&
          hasDataItems &&
          data.getLessonImages.data.map(
            (lessonImage) =>
              lessonImage && (
                <Card
                  isSelected={Boolean(value?.id === lessonImage.id)}
                  onCardClick={handleSelectImage}
                  data={lessonImage}
                  key={lessonImage.id}
                  imageUrl={lessonImage.url}
                  cardTitle={lessonImage.title}
                />
              )
          )}
      </SelectImageContainer>
    </>
  );
};

export default SelectImage;
