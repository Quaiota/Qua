import styled from '@emotion/styled';
import { Button } from '../Button/Button';
import SendIcon from '../icons/SendIcon';
import TextWrap from '../Typography/TextWrap';

const ConnectBtn = () => {
  return (
    <StyledConnectBtn>
      <div className='wallet'>
        <span>
          <SendIcon />
        </span>
        <TextWrap fontSize='bodymd'>Metamask</TextWrap>
      </div>
      <Button>Connect</Button>
    </StyledConnectBtn>
  );
};

export default ConnectBtn;

const StyledConnectBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .wallet {
    display: inline-flex;
    span {
      margin-right: 1rem;
    }
  }
`;
