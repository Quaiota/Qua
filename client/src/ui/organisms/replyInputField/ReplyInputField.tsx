import styled from '@emotion/styled';
import React from 'react';
import CircleFrame from '../../atom/circle-frame/CircleFrame';
import SendReplyIcon from '../../atom/icons/SendReplyIcon';

interface IReplyInputField {
  onSend?: () => void;
  value?: string;
  setValue?: (e: string) => void;
}

const ReplyInputField = ({
  onSend,
  setValue,
  value = '',
}: IReplyInputField) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSend && onSend();
  };
  return (
    <StyledReply onSubmit={handleSubmit}>
      <CircleFrame circleSize='sm' />
      <textarea
        onChange={(e) => setValue && setValue(e.target.value)}
        value={value}
        name='reply'
        className='input-field'
        placeholder='Send your reply'
      />
      <button className='send'>
        <SendReplyIcon />
      </button>
    </StyledReply>
  );
};

export default ReplyInputField;

const StyledReply = styled.form`
  display: flex;
  align-items: flex-start;
  padding-block: 12px;
  position: sticky;
  bottom: 0;
  background: ${({ theme }) => theme.black.matteblack};
  .input-field {
    flex: 1;
    margin-inline: 8px;
    background: none;
    border: none;
    min-height: 38px;
    max-height: 100px;
    padding-inline: 12px;
    padding-block: 8px;
    resize: vertical;
    color: ${({ theme }) => theme.primary.white};
  }
  .send {
    border: none;
    background: none;
    color: ${({ theme }) => theme.primary.white};
    padding: 8px 12px;
  }
`;
