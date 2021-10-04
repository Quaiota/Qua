import styled from '@emotion/styled';
import TextWrap from './Typography/TextWrap';

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

const StyledTransactionBox = styled.button`
  text-align: center;
  display: inline-block;
  background: none;
  border: none;
  cursor: pointer;
  div {
    width: 48px;
    height: 48px;
    /* padding: 1rem; */
    background: ${({ theme }) => theme.black.dark1};
    display: inline-flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
  }
  p {
    padding-top: 6px;
    text-transform: uppercase;
  }
`;
