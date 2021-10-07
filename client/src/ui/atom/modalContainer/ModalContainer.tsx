import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React from 'react';
import CloseIcon from '../icons/Close';

const ModalContainer: React.FC<{ closeAction: () => void }> = ({
  children,
  closeAction,
}) => {
  return (
    <StyledModalbox>
      <div className='content-wrapper'>{children}</div>
      <section>
        <StyledModalCloseBtn
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={closeAction}>
          <CloseIcon />
        </StyledModalCloseBtn>
      </section>
    </StyledModalbox>
  );
};

export default ModalContainer;

const StyledModalbox = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: auto;
  row-gap: 24px;
  align-items: center;
  .content-wrapper {
    min-height: 160px;
    min-width: 327px;
    width: 100%;
    border-radius: 36px;
    padding: 1.5rem;
    background: ${({ theme }) => theme.primary.white};
  }
`;

const StyledModalCloseBtn = styled(motion.button)`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.primary.white + '21'};
  border: none;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: 0.23s ease-in;
  :hover {
    background: ${({ theme }) => theme.primary.white + '3b'};
  }
`;
