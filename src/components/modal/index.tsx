import { ReactComponent as Close } from 'assets/icons/delete.svg';
import IconComponent from 'components/icon';
import Portal from 'components/portal';
import React from 'react';

import { deleteIconStyle, ModalHeader, ModalWrapper, Overlay } from './styles';

const Modal = () => {
  return (
    <Portal id='modal'>
      <Overlay>
        <ModalWrapper>
          <ModalHeader>
            <IconComponent
              iconStyle={deleteIconStyle}
              title='Close navbar'
              onClick={() => {
                console.log(123);
              }}
              Svg={Close}
            />
          </ModalHeader>
          123123
        </ModalWrapper>
      </Overlay>
    </Portal>
  );
};

export default Modal;
