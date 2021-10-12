import styled from '@emotion/styled'
import { observer } from 'mobx-react'
import Spacer from '../../ui/atom/spacer/spacer'
import breakpoint from '../../ui/configs/breakpoint'
import DashboardLayout from '../../ui/layout/DashboardLayout'
import LineChart from '../../ui/molecules/chart/LineChart'
import NetWorth from '../../ui/molecules/networth/NetWorth'
import ProfileCard from '../../ui/molecules/profileCard/ProfileCard'
import WalletList from '../../ui/molecules/walletList/WalletList'

const Dashboard = observer(() => {
  return (
    <DashboardLayout>
      <MainBox>
        <div className="chart">
          <LineChart />
        </div>
        <section className="profile-info">
          <ProfileCard />
          <Spacer size="1rem" />
          <NetWorth />

          <WalletList />
        </section>
      </MainBox>
    </DashboardLayout>
  )
})

const MainBox = styled.div`
  width: 100%;
  /* max-width: 1200px; */
  display: flex;
  flex-wrap: wrap-reverse;
  margin: 0 auto;
  column-gap: 2rem;
  height: 100%;
  overflow: auto;

  .chart {
    max-width: 1200px;
    width: 100%;
  }
  .profile-info {
    padding-block: 1rem;
    position: relative;
    width: 100%;
  }
  &::-webkit-scrollbar {
    width: 12px;
  }

  @media (max-width: ${breakpoint.mobile}px) {
    /* whitespace between graph and walletconnect */
    padding: 1rem 1rem 6rem;
  }

  @media (min-width: ${breakpoint.tab}px) {
    flex-wrap: nowrap;
    justify-content: center;
  }
`

export default Dashboard
