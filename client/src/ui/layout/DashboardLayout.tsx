import styled from '@emotion/styled';
import { useState } from 'react';
import { Switch, useRouteMatch } from 'react-router';
import ProtectedRoute from '../../auth/ProtectedRoute';
import Dashboard from '../../pages/dashboard/Dashboard';
import Settings from '../../pages/dashboard/dashboardSettings/Settings';
import breakpoint from '../configs/breakpoint';
import HorizontalNav from '../organisms/dashboardhorizontalNav/HorizontalNav';
import SideNav from '../organisms/dashboardSideNav/SideNav';

const DashboardLayout: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const toggleSidebar = () => {
    setToggle((prev) => !prev);
  };
  const { path } = useRouteMatch();

  return (
    <StyledDashboardLayout>
      <HorizontalNav
        sidebarOpen={toggle}
        profileImage=''
        sidebarToggle={toggleSidebar}
      />
      <div className='wrapper'>
        <SideNav open={toggle} />
        <div className='containBox'>
          <main>
            <Switch>
              <ProtectedRoute path={`${path}/`} exact component={Dashboard} />
              <ProtectedRoute path={`${path}/:setting`} component={Settings} />
            </Switch>
          </main>
        </div>
      </div>
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;

const StyledDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;
  padding-top: 60px;
  background: ${({ theme }) => theme.black.matteblack};

  @media (max-width: ${breakpoint.mobile}px) {
    height: 100%;
  }

  .wrapper {
    position: relative;
    display: flex;
    width: 100%;
    overflow: auto;
    min-height: 90%;
    height: 100vh;

    @media (max-width: ${breakpoint.mobile}px) {
      height: 100%;
    }

    .containBox {
      position: relative;
      display: flex;
      flex-wrap: wrap-reverse;
      width: 100%;
      overflow: auto;
      height: 100%;

      main {
        width: 100%;
      }
      .profile-info {
        padding-block: 1rem;
        position: relative;
        width: 100%;
      }
    }
  }
  @media (min-width: ${breakpoint.desktop}px) {
    height: 100vh;
    .wrapper {
      .containBox {
        flex-wrap: nowrap;
        padding-top: 2rem;
        .profile-info {
          margin-right: 1rem;
          max-width: 348px;
        }
      }
    }
  }
`;
