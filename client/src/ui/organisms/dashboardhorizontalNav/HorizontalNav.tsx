import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import CircleFrame from '../../atom/circle-frame/CircleFrame';
import Menubar from '../../atom/icons/MenuBar';
import CloseIcon from '../../atom/icons/Close';
import { useStore } from '../../../App';
import { useHistory } from 'react-router-dom';

export interface IHorizontalNav {
  sidebarToggle?: () => void;
  title?: string;
  profileImage: string;
  sidebarOpen?: boolean;
}

const HorizontalNav: React.FC<IHorizontalNav> = ({
  sidebarToggle,
  title,
  profileImage,
  sidebarOpen,
}) => {
  const store = useStore().userStore;

  const history = useHistory();
  const logout = () => {
    store.getAuth(false);
    history.replace('/onboarding/verify');
  };
  return (
    <StyledNav initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className='logo'>
        <button
          onClick={sidebarToggle && sidebarToggle}
          className='sidebar-toggler'>
          {!!sidebarOpen && sidebarOpen ? <CloseIcon /> : <Menubar />}
        </button>
        {title ? (
          <h1>{title}</h1>
        ) : (
          <h1>
            Qua <span></span>
          </h1>
        )}
      </div>

      <CircleFrame onClick={logout} circleSize='sm' image={profileImage} />
    </StyledNav>
  );
};

export default HorizontalNav;

const StyledNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  min-height: 45px;
  padding: 1rem;
  background: ${({ theme }) => theme.black.dark4};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1.5rem;
  .logo {
    display: flex;
    h1 {
      padding-left: 1.5rem;
      color: ${({ theme }) => theme.primary.white};
      span {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({ theme }) => theme.primary.mint1};
        margin-left: -5px;
      }
    }
  }
  .sidebar-toggler {
    border: none;
    background: none;
    cursor: pointer;
    color: ${({ theme }) => theme.primary.white};
  }
`;
