import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import IconComponent from 'components/icon';
import RegularInput from 'components/input/regularInput';
import { useModalState } from 'hooks';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { iconContainerStyle } from '../image/styles';
import { AssembleTabSearchWrapper } from './styles';

const AssembleLessonTab = () => {
  const createContentModalState = useModalState();
  const { t } = useTranslation();
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <AssembleTabSearchWrapper>
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
      </AssembleTabSearchWrapper>
    </>
  );
};

export default AssembleLessonTab;
