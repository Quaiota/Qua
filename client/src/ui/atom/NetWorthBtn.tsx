import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import TextWrap from './typography/TextWrap';

export interface INetWorthBtn {
  text: string;
  Icon: React.ReactNode;
}

const NetWorthBtn: React.FC<INetWorthBtn> = ({ Icon, text }) => {
  return (
    <StyledTransactionBox>
      <div>{Icon}</div>
      <TextWrap fontSize='bodysm'>{text}</TextWrap>
    </StyledTransactionBox>
  );
};

export default NetWorthBtn;

const StyledTransactionBox = styled(motion.button)`
  text-align: center;
  display: inline-block;
  background: none;
  border: none;
  cursor: pointer;
  div {
    width: 48px;
    height: 48px;
    background: ${({ theme }) => theme.black.dark1};
    display: inline-flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    transition: all 0.23s ease-in;
    :hover {
      background: ${({ theme }) => theme.black.dark3};
    }
  }
  p {
    padding-top: 6px;
    text-transform: uppercase;
  }
`;
