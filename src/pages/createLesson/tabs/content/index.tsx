import { useQuery } from '@apollo/client';
import {
  GetLessonImagesQueryVariables,
  LessonContent,
  Query,
  QueryGetLessonContentsArgs,
  SortOrder,
} from 'apollo/graphql/generated.types';
import { GET_LESSON_CONTENTS } from 'apollo/graphql/queries/lesson/getLessonContents';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import {
  limitOptions,
  loadOptions,
  loadOrderOptions,
  orderOptions,
} from 'common/options';
import { LimitOption, OrderOption } from 'common/types';
import Card from 'components/card';
import IconComponent from 'components/icon';
import RegularInput from 'components/input/regularInput';
import Modal from 'components/modal';
import DefaultSelectAsync from 'components/select';
import { useModalState, useModalStateWithParams } from 'hooks';
import { useDebouncedValue } from 'hooks/useDebouncedValue';
import { CreateLessonContentProvider } from 'pages/createLesson/context';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ParagraphBase } from 'styles/globalStyles';

import { iconContainerStyle } from '../image/styles';
import CreateContent from './createContent';
import DeleteContent from './deleteContent';
import EditContent from './editContent';
import SentencePreview from './preview';
import { ContentTabWrapper, ContentWrapper, StyledInView } from './styles';

const ContentTab = () => {
  const { t } = useTranslation();

  const createContentModalState = useModalState();
  const editContentModalState = useModalStateWithParams<LessonContent>();
  const deleteContentModalState = useModalStateWithParams<LessonContent>();

  const [lessonContentVariables, setLessonContentVariables] =
    useState<QueryGetLessonContentsArgs>({
      limit: 5,
      search: '',
      offset: 0,
      sortOrder: SortOrder.Asc,
    });

  const debouncedVariables = useDebouncedValue<QueryGetLessonContentsArgs>(
    lessonContentVariables,
    500
  );

  const { data, fetchMore } = useQuery<
    Pick<Query, 'getLessonContents'>,
    GetLessonImagesQueryVariables
  >(GET_LESSON_CONTENTS, {
    variables: debouncedVariables,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLessonContentVariables((previousValue) => {
      return {
        ...previousValue,
        search: e.target.value,
      };
    });
  };

  const handleLimitChange = (value: LimitOption | null) => {
    setLessonContentVariables((previousValue) => {
      return {
        ...previousValue,
        limit: value?.value ?? 10,
      };
    });
  };

  const handleOrderChange = (value: OrderOption | null) => {
    setLessonContentVariables((previousValue) => {
      return {
        ...previousValue,
        sortOrder: value?.value ?? SortOrder.Asc,
      };
    });
  };

  const handleFetchMore = async (isInView: boolean) => {
    if (!data || !data.getLessonContents.hasMore || !isInView) return;

    const offset = data.getLessonContents.data.length;
    await fetchMore({
      variables: {
        offset,
      },
    });
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
          renderContent={({ params }) => <EditContent lessonContent={params} />}
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
        <IconComponent
          onClick={createContentModalState.openModal}
          iconContainerStyle={iconContainerStyle}
          title='Add content'
          Svg={Plus}
        />
        <RegularInput
          Svg={Search}
          title='Seacrh'
          placeholder={t('pages.createLesson.search')}
          value={lessonContentVariables.search ?? ''}
          onChange={handleSearchChange}
        />
        {t('pages.createLesson.limit')}
        <DefaultSelectAsync
          name='limit'
          getOptions={loadOptions}
          onChange={handleLimitChange}
          defaultValue={limitOptions[0]}
        />
        {t('pages.createLesson.sortOrder')}
        <DefaultSelectAsync
          name='sortOrder'
          getOptions={loadOrderOptions}
          onChange={handleOrderChange}
          defaultValue={orderOptions[0]}
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
                    canRemoveSentence
                    key={sentence.id}
                    index={index}
                    sentence={sentence}
                  />
                ))}
              </Card>
            )
        )}
      </ContentWrapper>
      <StyledInView onChange={handleFetchMore}>
        <ParagraphBase $textType='normalText' $textWeight='medium'>
          The end of the list.
        </ParagraphBase>
      </StyledInView>
    </>
  );
};

export default ContentTab;
