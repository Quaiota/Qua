import styled from '@emotion/styled';
import { useState } from 'react';
import Spacer from '../ui/atom/spacer/spacer';
import TextWrap from '../ui/atom/typography/TextWrap';
import PostHeader from '../ui/molecules/post/PostHeader';
import ProfileHeader from '../ui/molecules/profileHeader/ProfileHeader';
import Modal from '../ui/organisms/modal/Modal';

const ConstructionSite = () => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };
  return (
    <StyleContent>
      {/* <button onClick={toggleModal}>open modal</button> */}
      <div className='box'>
        <ProfileHeader size='large' />
        <Spacer size='2rem' />
        <Spacer size='2rem' />
        <div>
          <ProfileHeader />
          <PostHeader />
          <Spacer size='1rem' />
          <TextWrap fontSize='body'>
            We need to move NFTs onto the layer 2 ecosystem to cut fees.
            However, doing that *right* requires good cross-rollup portability
            standards, so the ecosystem can avoid getting locked into one
            particular L2. The NFT ecosystem is growing rapidly, and it’s a
            significant part of the Ethereum chain’s gas consumption.
          </TextWrap>
        </div>
      </div>
      <Modal show={show} close={toggleModal}>
        <div className='display'>
          <h1>Hello world</h1>
        </div>
      </Modal>
    </StyleContent>
  );
};

const StyleContent = styled.div`
  background: ${({ theme }) => theme.black.matteblack};
  min-height: 90vh;
  background: gray;
  .box {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export default ConstructionSite;
