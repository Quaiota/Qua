import { FC } from 'react';
import Spacer from '../../ui/atom/spacer/spacer';
import FeedTabs from '../../ui/molecules/feedTabs/FeedTab';
import Post from '../../ui/organisms/post/Post';

const SocialWall: FC = () => {
  return (
    <>
      <Spacer size='8px' />
      <FeedTabs />
      <Spacer size='8px' />
      <Post />
      <Post />
    </>
  );
};

export default SocialWall;
