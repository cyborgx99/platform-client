import { ReactComponent as Close } from 'assets/icons/delete.svg';
import IconComponent from 'components/icon';
import Portal from 'components/portal';
import React, { useEffect, useState } from 'react';

import { deleteIconStyle, ModalHeader, ModalWrapper, Overlay } from './styles';
import { IModalProps } from './types';

const Modal: React.FC<IModalProps> = ({ children, isShown, onClose }) => {
  const [isAnimationDown, setIsAnimationDown] = useState(false);

  useEffect(() => {
    setIsAnimationDown(false);
  }, [isShown]);

  const handleClose = () => {
    setIsAnimationDown(true);
    setTimeout(onClose, 400);
  };
  return isShown ? (
    <Portal id='modal'>
      <Overlay>
        <ModalWrapper $isCloseAnimation={isAnimationDown}>
          <ModalHeader>
            <IconComponent
              iconStyle={deleteIconStyle}
              title='Close modal'
              onClick={handleClose}
              Svg={Close}
            />
          </ModalHeader>
          {children}
        </ModalWrapper>
      </Overlay>
    </Portal>
  ) : null;
};

export default Modal;
