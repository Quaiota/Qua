import styled from '@emotion/styled'
import { observer } from 'mobx-react'
import { Route, useRouteMatch } from 'react-router'
import Spacer from '../../ui/atom/spacer/spacer'
import breakpoint from '../../ui/configs/breakpoint'
import LineChart from '../../ui/molecules/chart/LineChart'
import NetWorth from '../../ui/molecules/networth/NetWorth'
import ProfileCard from '../../ui/molecules/profileCard/ProfileCard'
import WalletList from '../../ui/molecules/walletList/WalletList'
import Settings from './dashboardSettings/Settings'

const Dashboard = observer(() => {
  const { url } = useRouteMatch()
  return (
    <MainBox>
      <Route path={`${url}/settings`} component={Settings} />
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
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
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

  @media (min-width: ${breakpoint.desktop}px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`

export default Dashboard
