import styled from '@emotion/styled';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../ui/atom/button/Button';
import Spacer from '../../ui/atom/spacer/spacer';
import TextWrap from '../../ui/atom/typography/TextWrap';
import breakpoint from '../../ui/configs/breakpoint';
import PadLockIcon from '../../ui/atom/icons/PadLockIcon';
import { useStore } from '../../App';
import useInputRef from '../../hooks/inputRef';
import BasicInput from '../../ui/molecules/inputField/BasicInput';
import Info from '../../ui/molecules/info/Info';

const VerifyPassword = () => {
  const [password, setPassword] = useState('');
  const [formReady, setFormReady] = useState(false);
  const store = useStore().userStore;
  const history = useHistory();

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
      store.getAuth(true).then(() => history.push('/dashboard'));
    }
  };
  return (
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
  );
};

export default VerifyPassword;

const StyledVerify = styled.div`
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.accent.purple};
  height: 100vh;
  padding: 1rem;
  overflow-y: auto;
  form {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    margin-top: 10vh;
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
      @media (max-width: ${breakpoint.mobile}px) {
        button {
          display: inline-block;
          width: 100%;
        }
      }
    }
    .border-b,
    .box {
      padding-bottom: 1rem;
      padding-top: 0.8rem;
      border-bottom: 1px ${({ theme }) => theme.primary.white + '3a'} solid;

      .actionBox {
        display: flex;
        column-gap: 1.4rem;
        padding-block: 1rem;
      }
    }
    .box {
      border: none;
    }
  }
`;
