import { ReactComponent as Close } from 'assets/icons/delete.svg';
import IconComponent from 'components/icon';
import Portal from 'components/portal';
import React, { useEffect, useState } from 'react';

import { deleteIconStyle, ModalHeader, ModalWrapper, Overlay } from './styles';
import { IModalProps } from './types';

const Modal = <Params,>({
  isOpen,
  closeModal,
  renderContent,
  params,
}: IModalProps<Params>) => {
  const [isAnimationDown, setIsAnimationDown] = useState(false);

  useEffect(() => {
    setIsAnimationDown(false);
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimationDown(true);
    setTimeout(closeModal, 400);
  };

  return isOpen && params !== null ? (
    <Portal id='modal'>
      <Overlay>
        <ModalWrapper data-cy-modal $isCloseAnimation={isAnimationDown}>
          <ModalHeader>
            <IconComponent
              iconStyle={deleteIconStyle}
              title='Close modal'
              onClick={handleClose}
              Svg={Close}
            />
          </ModalHeader>
          {renderContent({ params })}
        </ModalWrapper>
      </Overlay>
    </Portal>
  ) : null;
};

export default Modal;
