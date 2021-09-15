import { observer } from 'mobx-react';
import { useStore } from '../../App';
import { useHistory } from 'react-router';
import styled from '@emotion/styled';
import ProfileCard from '../../UI/molecules/ProfileCard/ProfileCard';
import { theme } from '../../UI/configs/theme';
import Header from '../../UI/atom/Typography/Header';
import Spacer from '../../UI/atom/spacer/spacer';

const Dashboard = observer(() => {
  const store = useStore().userStore;
  const history = useHistory();
  const logout = () => {
    store.getAuth(false);
    history.replace('/');
  };
  return (
    <StyledLayout>
      <MainBox>
        <ProfileCard />
        {/* Overview */}
        <Spacer size='2rem' />
        <Header text='Overview' size='lg' color='white' />
        <Spacer size='2rem' />

        <button onClick={logout}>log out</button>
      </MainBox>
    </StyledLayout>
  );
});

const MainBox = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px;
  height: 100%;
`;

const StyledLayout = styled.div`
  background: ${theme.black};
  height: 100%;
`;

export default Dashboard;
