import { observer } from 'mobx-react';
import { useStore } from '../../App';
import { useHistory } from 'react-router';
import styled from '@emotion/styled';
import DashboardLayout from '../../UI/Layout/DashboardLayout';

const Dashboard = observer(() => {
  const store = useStore().userStore;
  const history = useHistory();
  const logout = () => {
    store.getAuth(false);
    history.replace('/');
  };
  return (
    <DashboardLayout>
      <MainBox>
        Hello world
        <button onClick={logout}>log out</button>
      </MainBox>
    </DashboardLayout>
  );
});

const MainBox = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px;
  height: 100%;
`;

export default Dashboard;
