import styled from '@emotion/styled';
import { useState } from 'react';
import Spacer from '../atom/spacer/spacer';
import breakpoint from '../configs/breakpoint';
import NetWorth from '../molecules/Networth/NetWorth';
import ProfileCard from '../molecules/ProfileCard/ProfileCard';
import WalletList from '../molecules/WalletList/WalletList';
import HorizontalNav from '../organisms/HorizontalNav';
import SideNav from '../organisms/SideNav';

const DashboardLayout: React.FC = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const toggleSidebar = () => {
    setToggle((prev) => !prev);
  };

  return (
    <StyledDashboardLayout>
      <HorizontalNav profileImage='' sidebarToggle={toggleSidebar} />
      <div className='wrapper'>
        <SideNav open={toggle} />
        <div className='containBox'>
          <main>{children}</main>
          <section className='profile-info'>
            <ProfileCard />
            <Spacer size='1rem' />
            <NetWorth />

            <WalletList />
          </section>
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
  background: ${({ theme }) => theme.black.matteblack};

  .wrapper {
    position: relative;
    display: flex;
    width: 100%;
    overflow: auto;
    min-height: 90%;
    height: 100%;

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
        height: 100%;
        position: relative;
        width: 100%;
      }
    }
  }
  @media (min-width: ${breakpoint.desktop}) {
    .wrapper {
      .containBox {
        flex-wrap: nowrap;
        .profile-info {
          margin-right: 1rem;
          max-width: 348px;
        }
      }
    }
  }
`;
