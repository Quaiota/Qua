import { observer } from 'mobx-react';
import { useStore } from '../../App';
import { useHistory } from 'react-router';
import styled from '@emotion/styled';
import ProfileCard from '../../UI/molecules/ProfileCard/ProfileCard';
import { theme } from '../../UI/configs/theme';
import Header from '../../UI/atom/Typography/Header';
import Spacer from '../../UI/atom/spacer/spacer';
import Card from '../../UI/atom/card/Card';
import CircleFrame from '../../UI/atom/circle-frame/CircleFrame';
import { useTheme } from '@emotion/react';

const Dashboard = observer(() => {
  const store = useStore().userStore;
  const history = useHistory();
  const themer = useTheme();

  console.log({ themer });
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
        <Card>
          <StyledFlex>
            <CircleFrame circleSize='sm' image='' />
            <Spacer horizontalSpace size='.8rem' />
            <Header text='Social' size='md' />
          </StyledFlex>
          <Header text='0 QUA' size='md' />
        </Card>
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
  background: ${theme.black.matteblack};
  height: 100%;
`;

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;

export default Dashboard;
