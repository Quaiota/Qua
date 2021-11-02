import React from 'react';
import ModalBackground from '../../atom/ModalBackground/ModalBackground';
import ModalContainer from '../../atom/modalContainer/ModalContainer';

export interface IModal {
  open: boolean;
  closeOnBackgroundClick?: boolean;
  close: () => void;
  backgroundColor?: string;
  closeBtn?: boolean;
}

const Modal: React.FC<IModal> = ({
  open,
  children,
  closeOnBackgroundClick,
  close,
  backgroundColor,
  closeBtn,
}) => {
  return (
    <ModalBackground
      open={open}
      close={close}
      closeOnBackgroundClick={closeOnBackgroundClick}>
      <ModalContainer
        closeBtn={closeBtn}
        backgroundColor={backgroundColor}
        closeAction={close}>
        {children}
      </ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
