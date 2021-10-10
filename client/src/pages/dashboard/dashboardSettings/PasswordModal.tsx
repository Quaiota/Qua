import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState, ChangeEvent, FormEvent } from 'react';
import useInputRef from '../../../hooks/inputRef';
import Button from '../../../ui/atom/button/Button';
import PadLockIcon from '../../../ui/atom/icons/PadLockIcon';
import Spacer from '../../../ui/atom/spacer/spacer';
import TextWrap from '../../../ui/atom/typography/TextWrap';
import Info from '../../../ui/molecules/info/Info';
import BasicInput from '../../../ui/molecules/inputField/BasicInput';
import Modal from '../../../ui/organisms/modal/Modal';

interface IPasswordModal {
  open: boolean;
  close: () => void;
}

const PasswordModal: React.FC<IPasswordModal> = ({ close, open }) => {
  const color = useTheme();

  const [password, setPassword] = useState('');
  const [formReady, setFormReady] = useState(false);
  const { inputRef } = useInputRef();
  const enableBtn = () => !!password && password.length >= 8;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value.trim());
    setFormReady(enableBtn());
  };

  const handlSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formReady) {
      //   Todo: write your submission logic here.
      close();
    }
  };
  return (
    <Modal open={open} close={close} backgroundColor={color.accent.purple}>
      <StyledVerify>
        <form onSubmit={handlSubmit}>
          <div className='padlock-box'>
            <PadLockIcon />
            <TextWrap fontSize='h2'>Security Verification</TextWrap>
          </div>
          <Spacer size='2rem' />

          <div className='box'>
            <BasicInput
              label='Enter password'
              id='password'
              name='password'
              type='password'
              value={password}
              onChange={handleChange}
              ref={inputRef}
            />

            <Spacer size='1rem' />
            <Info text='Change your password frequently to protect your account' />
          </div>
          <div className='btn-box'>
            <Button btnType='solid' type='submit' disabled={!formReady}>
              Confirm
            </Button>
          </div>
        </form>
      </StyledVerify>
    </Modal>
  );
};

const StyledVerify = styled.div`
  height: 100%;
  display: flex;
  overflow-y: auto;
  form {
    max-width: 340px;
    width: 100%;
    margin: 0 auto;
    margin-top: 1vh;
    .padlock-box {
      display: flex;
      align-items: center;
      column-gap: 10px;
    }
    .btn-box {
      padding: 1rem 0;
      padding-top: 1.2rem;
      display: flex;
      justify-content: center;
      button {
        display: block;
        width: 100%;
      }
    }
    .border-b,
    .box {
      padding-bottom: 1rem;
      padding-top: 0.8rem;
      border-bottom: 1px ${({ theme }) => theme.primary.white + '3a'} solid;
    }
    .box {
      border: none;
    }
  }
`;

export default PasswordModal;
