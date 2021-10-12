import ProtectedRoute from '../../auth/ProtectedRoute';
import SocialLayout from '../../ui/layout/SocialLayout';
import Post from '../../ui/organisms/post/Post';

const SocialWall = () => {
  return (
    <SocialLayout>
      <ProtectedRoute
        path='/social/feed'
        component={() => (
          <>
            <Post />
          </>
        )}
      />
      {/* <Post />
      <Post />
      <Post /> */}
    </SocialLayout>
  );
};

export default SocialWall;
