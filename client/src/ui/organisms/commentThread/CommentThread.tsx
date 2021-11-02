import styled from '@emotion/styled';
import React from 'react';
import Button from '../../atom/button/Button';
import CancelIcon from '../../atom/icons/CancelIcon';
import TextWrap from '../../atom/typography/TextWrap';
import breakpoint from '../../configs/breakpoint';
import BackgroundOverlay from '../../molecules/backgroundOverlay/BackgroundOverlay';
import CommentComponent from '../comment/Comment';
import ReplyInputField from '../replyInputField/ReplyInputField';

interface ICommentThread {
  title: string;
  setdisplay: (e: boolean) => void;
  isDisplayed: boolean;
  HandleCommentReply?: () => void;
  ReplyValue?: string;
  setReplyValue?: (e: string) => void;
}

const CommentThread = ({
  setdisplay,
  setReplyValue,
  title,
  isDisplayed,
  HandleCommentReply,
  ReplyValue,
}: ICommentThread) => {
  return (
    <BackgroundOverlay open={isDisplayed}>
      <StyledThread>
        <div className='head'>
          <TextWrap bold='bold' fontSize='h2'>
            {title}
          </TextWrap>

          <Button btnType='transparent' onClick={() => setdisplay(false)}>
            <CancelIcon />
          </Button>
        </div>
        <div className='comments'>
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
          <CommentComponent />
        </div>
        <ReplyInputField
          onSend={HandleCommentReply}
          setValue={setReplyValue}
          value={ReplyValue}
        />
      </StyledThread>
    </BackgroundOverlay>
  );
};

export default CommentThread;

const StyledThread = styled.aside`
  overflow-y: auto;
  background: ${({ theme }) => theme.black.matteblack};
  .head {
    border-bottom: 1px ${({ theme }) => theme.primary.white + '23'} solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-bottom: 0.48rem;
    position: sticky;
    top: 0;
    background: ${({ theme }) => theme.black.matteblack};

    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: ${breakpoint.tab}px) {
    max-width: 410px;
    position: absolute;
    width: 100%;
    right: 260px;
    top: 0;
    bottom: 0;
    min-width: 340px;
  }
`;
