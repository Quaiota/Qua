import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useStore } from '../../App';
import Button from '../atom/button/Button';
import MoreHorizontal from '../atom/icons/MoreHorizontal';
import breakpoint from '../configs/breakpoint';
import SocialSideNav from '../molecules/socialNav/SocialSideNav';
import SocialTopNav from '../molecules/socialNav/SocialTopNav';
import { StyledDropdown } from '../organisms/dashboardhorizontalNav/HorizontalNav';

const SocialLayout: React.FC = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const history = useHistory();
  const store = useStore().userStore;

  const logout = () => {
    store.getAuth(false);
    history.replace('/onboarding/verify');
  };

  return (
    <StyledSocialLayout>
      <Container>
        <aside className='sidenav'>
          <SocialSideNav />
        </aside>
        <main>
          <SocialTopNav />
          <section className='contents'>{props.children}</section>
        </main>
        <div className='profile'>
          <div>
            <Button
              onClick={() => {
                setDropdown((prev) => !prev);
              }}
              btnType='transparent'>
              <MoreHorizontal />
            </Button>
            <StyledDropdown
              initial={{ opacity: 0 }}
              animate={dropdown ? { opacity: 1 } : { opacity: 0 }}>
              <Link to='/dashboard'>Qua profile</Link>
              <Link to='#' onClick={logout}>
                Log out
              </Link>
            </StyledDropdown>
          </div>
        </div>
      </Container>
    </StyledSocialLayout>
  );
};

export default SocialLayout;

const StyledSocialLayout = styled.div`
  background: ${({ theme }) => theme.black.matteblack};
  display: flex;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .sidenav,
  .profile {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    div {
      width: max-content;
      position: relative;
    }
  }
  main {
    /* flex-grow: 2; */
    max-width: 540px;
    height: 100%;
    padding-top: 0;
    .contents {
      padding: 1rem;
    }
    @media (min-width: ${breakpoint.tab}px) {
      border-inline: 1px ${({ theme }) => theme.primary.white + '23'} solid;
    }
  }
`;
