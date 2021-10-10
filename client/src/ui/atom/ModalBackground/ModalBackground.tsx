import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';

export interface IModalBackground {
  open: boolean;
  closeOnBackgroundClick?: boolean;
  close: Function;
}

const ModalBackground: React.FC<IModalBackground> = ({
  children,
  open,
  close,
  closeOnBackgroundClick = true,
}) => {
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    // @ts-ignore
    if (e.target.id === 'modalbg') {
      close();
    }
  };

  const initState = { opacity: 0, display: 'none' };

  return (
    <StyledModalBg
      animate={open ? { opacity: 1, display: 'flex' } : initState}
      id='modalbg'
      initial={initState}
      onClick={closeOnBackgroundClick ? closeModal : () => {}}>
      {children}
    </StyledModalBg>
  );
};

export default ModalBackground;

const StyledModalBg = styled(motion.div)`
  background: rgba(14, 15, 15, 0.28);
  backdrop-filter: blur(6px);
  /* display: flex; */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
