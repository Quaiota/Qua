import React from 'react';
import ModalBackground from '../../atom/ModalBackground/ModalBackground';
import ModalContainer from '../../atom/modalContainer/ModalContainer';

export interface IModal {
  show: boolean;
  closeOnBackgroundClick?: boolean;
  close: () => void;
}

const Modal: React.FC<IModal> = ({
  show,
  children,
  closeOnBackgroundClick,
  close,
}) => {
  return (
    <ModalBackground
      show={show}
      close={close}
      closeOnBackgroundClick={closeOnBackgroundClick}>
      <ModalContainer closeAction={close}>{children}</ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
