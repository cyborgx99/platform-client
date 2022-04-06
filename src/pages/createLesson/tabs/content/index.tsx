import { useQuery } from '@apollo/client';
import {
  GetLessonImagesQueryVariables,
  Query,
} from 'apollo/graphql/generated.types';
import { GET_LESSON_CONTENTS } from 'apollo/graphql/queries/lesson/getLessonContents';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import Card from 'components/card';
import IconComponent from 'components/icon';
import RegularInput from 'components/input/regularInput';
import Modal from 'components/modal';
import { useDebouncedValue } from 'hooks/useDebouncedValue';
import { CreateLessonContentProvider } from 'pages/createLesson/context';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { iconContainerStyle } from '../image/styles';
import CreateContent from './createContent';
import DeleteContent from './deleteContent';
import SentencePreview from './preview';
import { ContentTabWrapper, ContentWrapper } from './styles';

const ContentTab = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [isCreateModalShown, setIsCreateModalShown] = useState(false);
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [currentContentId, setCurrentContentId] = useState('');
  const [limit, setLimit] = useState(20);
  const debouncedSearch: string = useDebouncedValue<string>(search, 500);
  const { data } = useQuery<
    Pick<Query, 'getLessonContents'>,
    GetLessonImagesQueryVariables
  >(GET_LESSON_CONTENTS, {
    variables: {
      limit,
      search: debouncedSearch,
      offset: 0,
    },
  });

  const currentContent = data?.getLessonContents.data.find(
    (content) => content?.id === currentContentId
  );

  console.log(setLimit);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const openCreateModal = () => {
    setIsCreateModalShown(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalShown(false);
  };

  const openDeleteModal = (id: string) => {
    setCurrentContentId(id);
    setIsDeleteModalShown(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalShown(false);
  };

  return (
    <>
      <Modal onClose={closeCreateModal} isShown={isCreateModalShown}>
        <CreateLessonContentProvider>
          <CreateContent />
        </CreateLessonContentProvider>
      </Modal>
      <Modal onClose={closeDeleteModal} isShown={isDeleteModalShown}>
        {currentContent && (
          <DeleteContent
            onClose={closeDeleteModal}
            currentContent={currentContent}
          />
        )}
      </Modal>
      <ContentTabWrapper>
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
          title='Add content'
          Svg={Plus}
        />
      </ContentTabWrapper>
      <ContentWrapper>
        {data?.getLessonContents.data.map(
          (lessonContent) =>
            lessonContent && (
              <Card
                data={lessonContent.id}
                key={lessonContent.id}
                onLeftClick={() => {
                  console.log(123);
                }}
                onRightClick={openDeleteModal}
                cardTitle={lessonContent.title}>
                {lessonContent.sentences.map((sentence, index) => (
                  <SentencePreview
                    key={sentence.id}
                    index={index}
                    sentence={sentence}
                  />
                ))}
              </Card>
            )
        )}
      </ContentWrapper>
    </>
  );
};

export default ContentTab;
