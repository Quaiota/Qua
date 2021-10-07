import styled from '@emotion/styled';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../ui/atom/button/Button';
import InfoIcon from '../../ui/atom/icons/InfoIcon';
import Spacer from '../../ui/atom/spacer/spacer';
import TextWrap from '../../ui/atom/typography/TextWrap';
import breakpoint from '../../ui/configs/breakpoint';

const SecureAccount = () => {
  const [password, setPassword] = useState('');
  const [formReady, setFormReady] = useState(false);
  const history = useHistory();

  const enableBtn = () => !!password && password.length >= 8;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value.trim());
    setFormReady(enableBtn());
  };

  const handlSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formReady) {
      history.push('/onboarding/verify');
    }
  };
  return (
    <StyledSecureAccount>
      <form onSubmit={handlSubmit}>
        <TextWrap fontSize='h2'>Welcome Roosevelt</TextWrap>
        <TextWrap fontSize='h1'>Secure your account</TextWrap>
        <Spacer size='2rem' />
        <div className='border-b'>
          <TextWrap fontSize='bodymd'>Your recovery seed phrase</TextWrap>
        </div>
        <Spacer size='2em' />
        <div className='border-b'>
          <TextWrap fontSize='body' bold='bolder'>
            find scheme limb bright fantasy object acquire magic tomato zero
            uphold extra
          </TextWrap>
          <Spacer size='2em' />
          <div className='actionBox'>
            <Button type='button' btnType='outlined'>
              Copy
            </Button>
            <Button type='button' btnType='outlined'>
              Download
            </Button>
            <Button type='button' btnType='outlined'>
              Print
            </Button>
          </div>
        </div>
        <div className='box'>
          <TextWrap fontSize='bodymd'>
            Write, download, print, or copy it somewhere safe.
          </TextWrap>
          <StyledInfo>
            <div>
              <InfoIcon />
            </div>
            <TextWrap fontSize='bodymd'>
              You may loose your account forever if you loose your seed phrase
            </TextWrap>
          </StyledInfo>
          <Spacer size='3em' />
          <StyledInput>
            <label htmlFor='password'>
              <TextWrap>Create a secure password</TextWrap>
            </label>
            <input
              id='password'
              name='password'
              type='password'
              value={password}
              onChange={handleChange}
            />
          </StyledInput>
        </div>
        <div className='btn-box'>
          <Button btnType='solid' type='submit' disabled={!formReady}>
            Finish Setup
          </Button>
        </div>
      </form>
    </StyledSecureAccount>
  );
};

export default SecureAccount;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  input {
    border: none;
    background: ${({ theme }) => theme.primary.white + '00'};
    padding: 1rem 12px;
    font-size: 1rem;
    color: ${({ theme }) => theme.primary.white};

    border-bottom: 1px ${({ theme }) => theme.primary.white + '1a'} solid;
    &:focus {
      border-bottom: 1px ${({ theme }) => theme.primary.white + '3a'} solid;
      outline: none;
    }
  }
`;

const StyledSecureAccount = styled.div`
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.accent.purple};
  height: 100vh;
  padding: 1rem;
  overflow-y: auto;
  form {
    max-width: 660px;
    width: 100%;
    margin: 0 auto;
    margin-top: 10vh;

    .btn-box {
      padding: 1rem 0;
      padding-top: 2.5rem;
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

export const StyledInfo = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.primary.white + '1b'};
  display: flex;
  column-gap: 6px;
  border-radius: 8px;
  width: fit-content;
  margin-block: 8px;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: ${breakpoint.tab}px) {
    align-items: center;
  }
`;
