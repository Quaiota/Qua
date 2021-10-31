import styled from '@emotion/styled';
import React, { lazy, useState } from 'react';
import { Link, Switch, useRouteMatch } from 'react-router-dom';
import { useStore } from '../../App';
import ProtectedRoute from '../../auth/ProtectedRoute';
import PostPage from '../../pages/Social/post/PostPage';
import Button from '../atom/button/Button';
import MoreHorizontal from '../atom/icons/MoreHorizontal';
import TextWrap from '../atom/typography/TextWrap';
import breakpoint from '../configs/breakpoint';
import SocialSideNav from '../molecules/socialNav/SocialSideNav';
import SocialTopNav from '../molecules/socialNav/SocialTopNav';
import { StyledDropdown } from '../organisms/dashboardhorizontalNav/HorizontalNav';

const SocialWall = lazy(() => import('../../pages/Social/SocialWall'));

const SocialLayout: React.FC = () => {
  const [dropdown, setDropdown] = useState(false);
  const store = useStore().userStore;
  const { path } = useRouteMatch();
  const dropdownInitState = { opacity: 0, display: 'none' };
  const dropdownAnimate = { opacity: 1, display: 'flex' };
  return (
    <StyledSocialLayout>
      <Container>
        <aside className='sidenav'>
          <SocialSideNav />
        </aside>
        <main>
          <SocialTopNav />
          <section className='contents'>
            <Switch>
              <ProtectedRoute path={`${path}`} exact component={SocialWall} />
              <ProtectedRoute
                path={`${path}/post/:id`}
                exact
                component={PostPage}
              />
            </Switch>
          </section>
        </main>
        <div className='profile'>
          <div className='title'>
            <TextWrap fontSize='body' bold='bold'>
              Social
            </TextWrap>
          </div>
          <div>
            <Button
              onClick={() => {
                setDropdown((prev) => !prev);
              }}
              btnType='transparent'>
              <MoreHorizontal />
            </Button>
            <StyledDropdown
              initial={dropdownInitState}
              animate={dropdown ? dropdownAnimate : dropdownInitState}>
              <Link to='/'>Qua profile</Link>
              <Link to='#' onClick={store.logout}>
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
  position: relative;
  overflow-y: auto;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${breakpoint.desktop}px) {
    overflow-y: hidden;
    height: 100vh;
    margin: 0 16rem auto;
  }

  .sidenav,
  .profile {
    display: block;
    padding-inline: 1rem;
  }
  .profile {
    max-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sidenav {
    position: fixed;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    background: ${({ theme }) => theme.black.matteblack};
    padding-top: 5px;
    padding-inline: 1rem;
    padding-bottom: 10px;
  }
  main {
    max-width: 598px;
    height: 100%;
    width: 100%;
    padding-top: 0;
    margin: 0 auto;
    overflow-y: auto;
  }
  @media (min-width: ${breakpoint.tab}px) {
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;

    .sidenav,
    .profile {
      flex-grow: 1;
      display: flex;
      width: unset;
      justify-content: center;
    }
    .sidenav {
      position: sticky;
      top: 0;
    }
    .profile {
      position: relative;
      div {
        width: max-content;
      }
      .title {
        display: none;
      }
    }
    main {
      flex-grow: 2;
      border-inline: 1px ${({ theme }) => theme.primary.sea3 + '16'} solid;
    }
  }
`;
