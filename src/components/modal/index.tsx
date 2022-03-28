import { ReactComponent as Close } from 'assets/icons/delete.svg';
import IconComponent from 'components/icon';
import Portal from 'components/portal';
import React from 'react';

import { deleteIconStyle, ModalHeader, ModalWrapper, Overlay } from './styles';
import { IModalProps } from './types';

const Modal: React.FC<IModalProps> = ({ children, isShown, onClose }) => {
  return isShown ? (
    <Portal id='modal'>
      <Overlay>
        <ModalWrapper>
          <ModalHeader>
            <IconComponent
              iconStyle={deleteIconStyle}
              title='Close modal'
              onClick={onClose}
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
