import { useQuery } from '@apollo/client';
import {
  Lesson,
  Query,
  QueryGetLessonsArgs,
  SortOrder,
} from 'apollo/graphql/generated.types';
import { GET_LESSONS } from 'apollo/graphql/queries/lesson/getLessons';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import {
  limitOptions,
  loadLimitOptions,
  loadOrderOptions,
  orderOptions,
} from 'common/options';
import { LimitOption, OrderOption } from 'common/types';
import Card from 'components/card';
import IconComponent from 'components/icon';
import RegularInput from 'components/input/regularInput';
import Modal from 'components/modal';
import DefaultSelectAsync from 'components/select';
import {
  useDebouncedValue,
  useModalState,
  useModalStateWithParams,
} from 'hooks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ParagraphBase } from 'styles/globalStyles';

import { iconContainerStyle } from '../image/styles';
import CreateLesson from './createLesson';
import DeleteLesson from './deleteLesson';
import DisplayLessonPages from './displayLessonPages';
import EditLesson from './editLesson';
import { LessonsContainer, LessonSearchWrapper, StyledInView } from './styles';

const LessonTab = () => {
  const createLessonModalState = useModalState();
  const editModalState = useModalStateWithParams<Lesson>();
  const deleteModalState = useModalStateWithParams<Lesson>();
  const { t } = useTranslation();
  const [lessonVariables, setLessonVariables] = useState<QueryGetLessonsArgs>({
    limit: 5,
    search: '',
    offset: 0,
    sortOrder: SortOrder.Asc,
  });

  const debouncedVariables = useDebouncedValue<QueryGetLessonsArgs>(
    lessonVariables,
    500
  );

  const { data, fetchMore } = useQuery<
    Pick<Query, 'getLessons'>,
    QueryGetLessonsArgs
  >(GET_LESSONS, {
    variables: debouncedVariables,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLessonVariables((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };

  const handleLimitChange = (value: LimitOption | null) => {
    setLessonVariables((previousValue) => {
      return {
        ...previousValue,
        limit: value?.value ?? 10,
      };
    });
  };

  const handleOrderChange = (value: OrderOption | null) => {
    setLessonVariables((previousValue) => {
      return {
        ...previousValue,
        sortOrder: value?.value ?? SortOrder.Asc,
      };
    });
  };

  const handleFetchMore = async (isInView: boolean) => {
    if (!data || !data.getLessons.hasMore || !isInView) return;

    const offset = data.getLessons.data.length;
    await fetchMore({
      variables: {
        offset,
      },
    });
  };

  return (
    <>
      <Modal
        {...createLessonModalState}
        renderContent={() => (
          <CreateLesson onCloseModal={createLessonModalState.closeModal} />
        )}
      />
      <Modal
        {...deleteModalState}
        renderContent={({ params }) => (
          <DeleteLesson onClose={deleteModalState.closeModal} lesson={params} />
        )}
      />
      <Modal
        {...editModalState}
        renderContent={({ params }) => (
          <EditLesson
            onCloseModal={editModalState.closeModal}
            lesson={params}
          />
        )}
      />
      <LessonSearchWrapper>
        <IconComponent
          onClick={createLessonModalState.openModal}
          iconContainerStyle={iconContainerStyle}
          title='Add content'
          Svg={Plus}
        />
        <RegularInput
          Svg={Search}
          title='Seacrh'
          placeholder={t('pages.create.search')}
          value={lessonVariables.search ?? ''}
          onChange={handleSearchChange}
        />
        {t('pages.create.limit')}
        <DefaultSelectAsync
          name='limit'
          getOptions={loadLimitOptions}
          onChange={handleLimitChange}
          defaultValue={limitOptions[0]}
        />
        {t('pages.create.sortOrder')}
        <DefaultSelectAsync
          name='sortOrder'
          getOptions={loadOrderOptions}
          onChange={handleOrderChange}
          defaultValue={orderOptions[0]}
        />
      </LessonSearchWrapper>
      <LessonsContainer>
        {data?.getLessons.data.map((lesson) => (
          <Card
            onLeftClick={editModalState.openModal}
            onRightClick={deleteModalState.openModal}
            data={lesson}
            key={lesson.id}
            cardTitle={lesson.title}>
            {lesson.pages && <DisplayLessonPages pages={lesson.pages} />}
          </Card>
        ))}
      </LessonsContainer>
      <StyledInView onChange={handleFetchMore}>
        <ParagraphBase $textType='normalText' $textWeight='medium'>
          The end of the list.
        </ParagraphBase>
      </StyledInView>
    </>
  );
};

export default LessonTab;
