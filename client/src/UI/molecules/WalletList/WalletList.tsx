import styled from '@emotion/styled';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ChevronDown from '../../atom/icons/ChevronDown';
import ChevronUp from '../../atom/icons/ChevronUp';
import TextWrap from '../../atom/Typography/TextWrap';
import ConnectBtn from '../../atom/walletConnectBtn/ConnectBtn';

const WalletList: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const initHeight = { height: '50px' };
  const maxHeight = { height: '360px' };
  return (
    <StyledWalletList
      initial={initHeight}
      animate={toggle ? maxHeight : initHeight}>
      <StyledHead onClick={() => setToggle((prev) => !prev)}>
        <span>{toggle ? <ChevronUp /> : <ChevronDown />}</span>
        <TextWrap fontSize='bodymd'>Connect your wallet</TextWrap>
        <span className='dot'></span>
      </StyledHead>
      <div>
        <ConnectBtn />
      </div>
    </StyledWalletList>
  );
};

const StyledWalletList = styled(motion.div)`
  background: ${({ theme }) => theme.black.dark2};
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  padding: 12px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary.white};
  }
`;
export default WalletList;
