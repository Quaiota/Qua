import styled from '@emotion/styled';
import { Link, useRouteMatch } from 'react-router-dom';
import Spacer from '../../atom/spacer/spacer';
import TextWrap from '../../atom/typography/TextWrap';
import PostHeader from '../../molecules/post/PostHeader';
import ProfileHeader from '../../molecules/profileHeader/ProfileHeader';

const Post = () => {
  const { path } = useRouteMatch();
  return (
    <StyledPost>
      <ProfileHeader />
      <PostHeader />
      <Spacer size='1rem' />
      <article className='article'>
        <TextWrap fontSize='body'>
          We need to move NFTs onto the layer 2 ecosystem to cut fees. However,
          doing that *right* requires good cross-rollup portability standards,
          so the ecosystem can avoid getting locked into one particular L2. The
          NFT ecosystem is growing rapidly, and it’s a significant part of the
          Ethereum chain’s gas consumption.
        </TextWrap>
        <TextWrap bold='bold'>
          <Link to={`${path}/post/1`} className='view-article'>
            View Article
          </Link>
        </TextWrap>
      </article>
    </StyledPost>
  );
};

export default Post;

const StyledPost = styled.div`
  max-width: 520px;
  padding-bottom: 24px;

  .article {
    padding-inline: 1rem;
    .view-article {
      color: ${({ theme }) => theme.primary.sea3};
      margin-top: 1rem;
      text-decoration: none;
      display: inline-block;
    }
  }
`;
