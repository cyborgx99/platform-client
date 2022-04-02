import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import IconComponent from 'components/icon';
import RegularInput from 'components/input/regularInput';
import Modal from 'components/modal';
import { CreateLessonContentProvider } from 'pages/createLesson/context';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { iconContainerStyle } from '../image/styles';
import CreateContent from './createContent';
import { ContentTabWrapper } from './styles';

const ContentTab = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [isCreateModalShown, setIsCreateModalShown] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const openCreateModal = () => {
    setIsCreateModalShown(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalShown(false);
  };

  return (
    <>
      <Modal onClose={closeCreateModal} isShown={isCreateModalShown}>
        <CreateLessonContentProvider>
          <CreateContent />
        </CreateLessonContentProvider>
      </Modal>
      <ContentTabWrapper>
        <RegularInput
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
    </>
  );
};

export default ContentTab;
