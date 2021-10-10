import styled from '@emotion/styled';
import React from 'react';
import Button from '../../ui/atom/button/Button';
import Spacer from '../../ui/atom/spacer/spacer';
import TextWrap from '../../ui/atom/typography/TextWrap';
import breakpoint from '../../ui/configs/breakpoint';
import InputField from '../../ui/molecules/inputField/InputField';
import Modal from '../../ui/organisms/modal/Modal';
import useSignup from './hook/useSignup';

const OnBoard: React.FC<{ toggleModal: () => void; show: boolean }> = ({
  show,
  toggleModal,
}) => {
  const {
    isReady,
    signUp,
    color,
    handleChange,
    handleSubmit,
    inputRef,
  } = useSignup();

  return (
    <div>
      <Modal open={show} close={toggleModal} closeOnBackgroundClick={false}>
        <StyledContent onSubmit={handleSubmit}>
          <div className='box'>
            <TextWrap fontSize='h2' bold='bold' color={color.black.dark4}>
              Setup your Profile
            </TextWrap>
          </div>
          <Spacer size='2rem' />
          <InputField
            name='fullname'
            label='Full Name'
            placeholder='James Bond'
            ref={inputRef}
            value={signUp.fullname}
            onChange={handleChange}
          />
          <Spacer size='1rem' />
          <InputField
            value={signUp.handle}
            atSign
            name='handle'
            label='Qua Address'
            placeholder='James_Bond'
            onChange={handleChange}
          />
          <Spacer size='2rem' />
          <div className='box'>
            <Button
              disabled={!isReady}
              type='submit'
              btnType='solid'
              bgColor={color.black.dark4}>
              Claim Profile
            </Button>
          </div>
        </StyledContent>
      </Modal>
    </div>
  );
};

export default OnBoard;

const StyledContent = styled.form`
  padding-inline: 0.3rem;
  max-width: 600px;
  width: 100%;

  .box {
    display: flex;
    justify-content: center;
  }

  @media (min-width: ${breakpoint.tab}px) {
    width: 100%;
    width: 417px;
  }
`;
