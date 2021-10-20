import styled from '@emotion/styled';
import { FC } from 'react-router/node_modules/@types/react';
import Spacer from '../../../ui/atom/spacer/spacer';
import TextWrap from '../../../ui/atom/typography/TextWrap';
import PostHeader from '../../../ui/molecules/post/PostHeader';
import ProfileHeader from '../../../ui/molecules/profileHeader/ProfileHeader';

const PostPage: FC = () => {
  return (
    <StyledPost>
      <ProfileHeader />
      <PostHeader />
      <Spacer size='1rem' />
      <article className='article'>
        <TextWrap fontSize='bodymd'>
          We need to move NFTs onto the layer 2 ecosystem to cut fees. However,
          doing that *right* requires good cross-rollup portability standards,
          so the ecosystem can avoid getting locked into one particular L2. The
          NFT ecosystem is growing rapidly, and it’s a significant part of the
          Ethereum chain’s gas consumption.
        </TextWrap>
        <TextWrap bold='bold'></TextWrap>
      </article>
    </StyledPost>
  );
};

export default PostPage;

const StyledPost = styled.div`
  max-width: 520px;
  padding-bottom: 24px;

  .article {
    padding-inline: 1rem;
  }
`;
