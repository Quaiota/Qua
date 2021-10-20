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
          <div className='box-wrap'>
            <TextWrap fontSize='h2' bold='bold' color={color.black.dark4}>
              Setup your Profile
            </TextWrap>
          </div>
          <InputField
            tabIndex={1}
            name='fullname'
            label='Full Name'
            placeholder='James Bond'
            ref={inputRef}
            value={signUp.fullname}
            onChange={handleChange}
          />
          <Spacer size='1rem' />
          <InputField
            tabIndex={2}
            value={signUp.handle}
            atSign
            name='handle'
            label='Qua Address'
            placeholder='James_Bond'
            onChange={handleChange}
          />
          <div className='box-wrap'>
            <Button
              tabIndex={3}
              disabled={!isReady}
              type='submit'
              btnType='solid'
              bgColor={color.black.matteblack}>
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
  min-width: 340px;
  width: 100%;

  .box-wrap {
    display: flex;
    justify-content: center;
    padding-block: 2rem;
  }

  @media (min-width: ${breakpoint.tab}px) {
    width: 100%;
    width: 400px;
    .box-wrap {
      padding-block: 2.5rem;
    }
  }
`;
