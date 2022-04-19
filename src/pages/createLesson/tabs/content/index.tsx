import { useQuery } from '@apollo/client';
import {
  GetLessonImagesQueryVariables,
  LessonContent,
  Query,
} from 'apollo/graphql/generated.types';
import { GET_LESSON_CONTENTS } from 'apollo/graphql/queries/lesson/getLessonContents';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import Card from 'components/card';
import IconComponent from 'components/icon';
import RegularInput from 'components/input/regularInput';
import Modal from 'components/modal';
import { useModalState, useModalStateWithParams } from 'hooks';
import { useDebouncedValue } from 'hooks/useDebouncedValue';
import { CreateLessonContentProvider } from 'pages/createLesson/context';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { iconContainerStyle } from '../image/styles';
import CreateContent from './createContent';
import DeleteContent from './deleteContent';
import EditContent from './editContent';
import SentencePreview from './preview';
import { ContentTabWrapper, ContentWrapper } from './styles';

const ContentTab = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const createContentModalState = useModalState();
  const editContentModalState = useModalStateWithParams<LessonContent>();
  const deleteContentModalState = useModalStateWithParams<LessonContent>();
  const [limit, setLimit] = useState(20);
  const debouncedSearch = useDebouncedValue<string>(search, 500);
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

  console.log(setLimit);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <CreateLessonContentProvider>
        <Modal
          {...createContentModalState}
          renderContent={() => <CreateContent />}
        />
        <Modal
          {...editContentModalState}
          renderContent={() => <EditContent />}
        />
        <Modal
          {...deleteContentModalState}
          renderContent={({ params }) => (
            <DeleteContent
              onClose={deleteContentModalState.closeModal}
              currentContent={params}
            />
          )}
        />
      </CreateLessonContentProvider>
      <ContentTabWrapper>
        <RegularInput
          Svg={Search}
          title='Seacrh'
          placeholder={t('pages.createLesson.search')}
          value={search}
          onChange={handleChange}
        />
        <IconComponent
          onClick={createContentModalState.openModal}
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
                data={lessonContent}
                key={lessonContent.id}
                onLeftClick={editContentModalState.openModal}
                onRightClick={deleteContentModalState.openModal}
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
