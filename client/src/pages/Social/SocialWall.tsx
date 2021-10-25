import { FC, useState, useMemo } from 'react';

import { useStore } from '../../App';
import Spacer from '../../ui/atom/spacer/spacer';
import FeedTabs from '../../ui/molecules/feedTabs/FeedTab';
import Post from '../../ui/organisms/post/Post';
import EmptyFeed from './EmptyFeed';

const SocialWall: FC = () => {
  const { getOnboardStatus } = useStore().userStore;
  const [isOnboarded, setIsOnboarded] = useState();
  useMemo(async () => {
    getOnboardStatus()
      .then((res) => setIsOnboarded(res))
      .catch((e) => console.log(e));
  }, [getOnboardStatus]);
  if (isOnboarded)
    return (
      <>
        <Spacer size='8px' />
        <FeedTabs />
        <Spacer size='8px' />
        <Post />
        <Post />
      </>
    );
  return <EmptyFeed />;
};

export default SocialWall;
