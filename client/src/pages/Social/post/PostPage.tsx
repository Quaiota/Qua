import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { FC } from 'react-router/node_modules/@types/react';
import Button from '../../../ui/atom/button/Button';
import BoostIcon from '../../../ui/atom/icons/BoostIcon';
import CancelIcon from '../../../ui/atom/icons/CancelIcon';
import CommentIcon from '../../../ui/atom/icons/CommentIcon';
import LikeIcon from '../../../ui/atom/icons/LikeIcon';
import ShareIcon from '../../../ui/atom/icons/ShareIcon';
import Spacer from '../../../ui/atom/spacer/spacer';
import TextWrap from '../../../ui/atom/typography/TextWrap';
import PostHeader from '../../../ui/molecules/post/PostHeader';
import ProfileHeader from '../../../ui/molecules/profileHeader/ProfileHeader';
import CommentThread from '../../../ui/organisms/commentThread/CommentThread';
import Modal from '../../../ui/organisms/modal/Modal';

const PostPage: FC = () => {
  const [showComment, setShowComment] = useState(false);
  const [isModal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const color = useTheme();

  const [reply, setReply] = useState('');

  const postComment = () => {
    // Handle comment Replies
    console.log({ reply });
    setReply('');
  };

  return (
    <FlexBox>
      <StyledPost>
        <ProfileHeader />
        <PostHeader />
        <Spacer size='1rem' />
        <article className='article'>
          <TextWrap fontSize='bodymd'>
            We need to move NFTs onto the layer 2 ecosystem to cut fees.
            However, doing that *right* requires good cross-rollup portability
            standards, so the ecosystem can avoid getting locked into one
            particular L2. The NFT ecosystem is growing rapidly, and it’s a
            significant part of the Ethereum chain’s gas consumption.
          </TextWrap>
          <TextWrap fontSize='bodymd'>
            We need to move NFTs onto the layer 2 ecosystem to cut fees.
            However, doing that *right* requires good cross-rollup portability
            standards, so the ecosystem can avoid getting locked into one
            particular L2. The NFT ecosystem is growing rapidly, and it’s a
            significant part of the Ethereum chain’s gas consumption.
          </TextWrap>
        </article>

        <StyledActionBar>
          <Button btnType='transparent' onClick={() => setShowComment(true)}>
            <CommentIcon />
            <span>0</span>
          </Button>
          <Button btnType='transparent'>
            <LikeIcon />
            <span>0</span>
          </Button>
          <Button btnType='transparent' onClick={() => setModal(true)}>
            <BoostIcon />
            <span>0</span>
          </Button>
          <Button btnType='transparent'>
            <ShareIcon />
          </Button>
        </StyledActionBar>
      </StyledPost>
      {/* comments */}
      <CommentThread
        setdisplay={setShowComment}
        title='Thread'
        isDisplayed={showComment}
        HandleCommentReply={postComment}
        ReplyValue={reply}
        setReplyValue={setReply}
      />

      <Modal
        closeBtn={false}
        backgroundColor={color.black.matteblack}
        open={isModal}
        closeOnBackgroundClick
        close={closeModal}></Modal>
    </FlexBox>
  );
};

export default PostPage;

const FlexBox = styled.div``;

const StyledPost = styled.div`
  max-width: 620px;
  padding-bottom: 5rem;
  position: relative;
  overflow-y: auto;

  .article {
    padding-inline: 1rem;
  }
`;

const StyledActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;

  padding: 8px 12px;

  width: 100%;
  button {
    display: inline-flex;
    align-items: center;
    svg {
      fill: white;
    }
    span {
      padding-left: 6px;
      font-style: normal;
      font-weight: 800;
      font-size: 12px;
      line-height: 18px;
    }
  }
`;
