import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import IconComponent from 'components/icon';
import RegularInput from 'components/input/regularInput';
import Modal from 'components/modal';
import { useModalState } from 'hooks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { iconContainerStyle } from '../image/styles';
import CreateLesson from './createLesson';
import { LessonSearchWrapper } from './styles';

const LessonTab = () => {
  const createLessonModalState = useModalState();
  const { t } = useTranslation();
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Modal
        {...createLessonModalState}
        renderContent={() => <CreateLesson />}
      />
      <LessonSearchWrapper>
        <RegularInput
          Svg={Search}
          title='Seacrh'
          placeholder={t('pages.createLesson.search')}
          value={search}
          onChange={handleChange}
        />
        <IconComponent
          onClick={createLessonModalState.openModal}
          iconContainerStyle={iconContainerStyle}
          title='Add content'
          Svg={Plus}
        />
      </LessonSearchWrapper>
    </>
  );
};

export default LessonTab;
