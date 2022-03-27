import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import IconComponent from 'components/icon';
import Modal from 'components/modal';
import React, { useState } from 'react';

import CreateImageForm from './createImageForm';
import { iconContainerStyle, ImageTabWrapper } from './styles';

const ImageTab = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const closeModal = () => {
    setIsModalShown(false);
  };

  const openModal = () => {
    setIsModalShown(true);
  };
  return (
    <ImageTabWrapper>
      <Modal onClose={closeModal} isShown={isModalShown}>
        <CreateImageForm />
      </Modal>
      <IconComponent
        onClick={openModal}
        iconContainerStyle={iconContainerStyle}
        title='Add lesson'
        Svg={Plus}
      />
    </ImageTabWrapper>
  );
};

export default ImageTab;
