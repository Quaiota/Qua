import { observer } from 'mobx-react';
import styled from '@emotion/styled';
import DashboardLayout from '../../ui/layout/DashboardLayout';
import LineChart from '../../ui/molecules/chart/LineChart';

const Dashboard = observer(() => {
  return (
    <DashboardLayout>
      <MainBox>
        <LineChart />
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
