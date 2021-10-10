import styled from '@emotion/styled';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../../ui/atom/button/Button';
import ChevronLeftIcon from '../../../ui/atom/icons/ChevronLeftIcon';
import EyeIcon from '../../../ui/atom/icons/EyeIcon';
import Spacer from '../../../ui/atom/spacer/spacer';
import TextWrap from '../../../ui/atom/typography/TextWrap';
import breakpoint from '../../../ui/configs/breakpoint';
import DashboardLayout from '../../../ui/layout/DashboardLayout';
import SettingInput from '../../../ui/molecules/inputField/SettingInput';
import PasswordModal from './PasswordModal';

const Settings = () => {
  const history = useHistory();
  const [isModal, setModal] = useState(false);

  const closePasswordModal = () => {
    setModal(false);
  };

  return (
    <DashboardLayout>
      <StyledSettingsContainer>
        <div className='settings-header'>
          <Button btnType='transparent' onClick={() => history.goBack()}>
            <ChevronLeftIcon />
          </Button>
          <TextWrap fontSize='h3' bold='bolder'>
            Settings
          </TextWrap>
        </div>
        <form>
          <TextWrap fontSize='caption'>Security & privacy</TextWrap>
          <StyledFlexBox>
            <div>
              <Spacer size='1.5rem' />
              <SettingInput
                type='password'
                name='password'
                placeholder='**********'
                label='Account Password'
              />
            </div>
            <div>
              <Spacer size='1.5rem' />
              <SettingInput
                name='antilock'
                description='Set the time in minutes before your account auto-lock.'
                placeholder='5'
                label='Auto-Lock Timer'
              />
            </div>
          </StyledFlexBox>
          <StyledFlexBox>
            <SettingInput
              name='input1'
              label='Qua address'
              description='Connect a public key to your Qua address'
              pillText='@roosevelt'
              placeholder='Paste public address 0x9Ca9...43aA'
            />
          </StyledFlexBox>
          <StyledFlexBox>
            <div>
              <TextWrap>Recovery seed phrase</TextWrap>
              <Spacer size='12px' />
              <Button onClick={() => setModal(true)} type='button'>
                <EyeIcon /> &nbsp; Reveal
              </Button>
            </div>
          </StyledFlexBox>
          <StyledSubmitBtn bold='bold' disabled>
            Save changes
          </StyledSubmitBtn>
        </form>
      </StyledSettingsContainer>
      <PasswordModal open={isModal} close={closePasswordModal} />
    </DashboardLayout>
  );
};

const StyledSubmitBtn = styled(Button)`
  background: ${({ theme }) => theme.primary.mint1};
  display: block;
  color: ${({ theme }) => theme.black.matteblack};
  width: 100%;
  padding-block: 1.1em;
  @media (min-width: ${breakpoint.tab}px) {
    min-width: 300px;
    margin-top: 5%;
    width: fit-content;
  }
  :disabled {
    background: ${({ theme }) => theme.primary.mint1 + '81'};
  }
`;
const StyledSettingsContainer = styled.div`
  padding: 1rem;
  max-width: 1240px;
  margin: 2rem auto;
  .settings-header {
    display: flex;
    column-gap: 1.5rem;
    align-items: center;
    padding-block: 1rem;
  }
  form {
    padding: 0.75rem 1rem;
  }

  @media (min-width: ${breakpoint.tab}px) {
    .settings-header {
      padding-block: 2rem;
    }
  }
`;

const StyledFlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  column-gap: 8%;
  div {
    width: 100%;
  }
  @media (min-width: ${breakpoint.tab}px) {
    margin-bottom: 2.5rem;
    flex-wrap: nowrap;
  }
`;

export default Settings;
