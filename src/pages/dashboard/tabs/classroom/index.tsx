import { QueryGetLessonsArgs, SortOrder } from 'apollo/graphql/generated.types';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import {
  limitOptions,
  loadLimitOptions,
  loadOrderOptions,
  orderOptions,
} from 'common/options';
import { LimitOption, OrderOption } from 'common/types';
import IconComponent from 'components/icon';
import RegularInput from 'components/input/regularInput';
import Modal from 'components/modal';
import DefaultSelectAsync from 'components/select';
import { useModalState } from 'hooks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { iconContainerStyle } from '../lesson/style';
import CreateClassroom from './createClassroom';
import { ClassroomSearchWrapper } from './styles';

const ClassroomTab = () => {
  const createClassroomModalState = useModalState();
  const { t } = useTranslation();
  const [classroomVariables, setClassroomVariables] =
    useState<QueryGetLessonsArgs>({
      limit: 5,
      search: '',
      offset: 0,
      sortOrder: SortOrder.Asc,
    });

  // console.log(classroomVariables);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassroomVariables((prev) => ({
      ...prev,
      search: e.target.value,
    }));
  };

  const handleLimitChange = (value: LimitOption | null) => {
    setClassroomVariables((previousValue) => {
      return {
        ...previousValue,
        limit: value?.value ?? 10,
      };
    });
  };

  const handleOrderChange = (value: OrderOption | null) => {
    setClassroomVariables((previousValue) => {
      return {
        ...previousValue,
        sortOrder: value?.value ?? SortOrder.Asc,
      };
    });
  };

  return (
    <>
      <Modal
        {...createClassroomModalState}
        renderContent={() => (
          <CreateClassroom
            onCloseModal={createClassroomModalState.closeModal}
          />
        )}
      />
      <ClassroomSearchWrapper>
        <IconComponent
          onClick={createClassroomModalState.openModal}
          iconContainerStyle={iconContainerStyle}
          title='Add content'
          Svg={Plus}
        />
        <RegularInput
          Svg={Search}
          title='Seacrh'
          placeholder={t('pages.create.search')}
          value={classroomVariables.search ?? ''}
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
      </ClassroomSearchWrapper>
    </>
  );
};

export default ClassroomTab;
