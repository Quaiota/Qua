import { observer } from 'mobx-react';
import { useStore } from '../../App';
import { useHistory } from 'react-router';
import styled from '@emotion/styled';
import ProfileCard from '../../UI/molecules/ProfileCard/ProfileCard';

const Dashboard = observer(() => {
  const store = useStore().userStore;
  const history = useHistory();
  const logout = () => {
    store.getAuth(false);
    history.replace('/');
  };
  return (
    <MainBox>
      <ProfileCard />

      <button onClick={logout}>log out</button>
    </MainBox>
  );
});

const MainBox = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  background: #fafafa;
  padding: 1.5rem;
`;

export default Dashboard;
