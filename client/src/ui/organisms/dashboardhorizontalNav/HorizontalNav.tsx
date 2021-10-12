import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useStore } from '../../../App'
import CircleFrame from '../../atom/circle-frame/CircleFrame'
import CloseIcon from '../../atom/icons/Close'
import Menubar from '../../atom/icons/MenuBar'
import Logo from '../../atom/logo/Logo'
import breakpoint from '../../configs/breakpoint'

export interface IHorizontalNav {
  sidebarToggle?: () => void
  title?: string
  profileImage: string
  sidebarOpen?: boolean
}

const HorizontalNav: React.FC<IHorizontalNav> = ({
  sidebarToggle,
  title,
  profileImage,
  sidebarOpen
}) => {
  const store = useStore().userStore
  const [dropdown, setDropdown] = useState(false)
  const history = useHistory()
  const logout = () => {
    store.getAuth(false)
    history.replace('/onboarding/verify')
  }
  return (
    <StyledNav initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="logo">
        <button
          onClick={sidebarToggle && sidebarToggle}
          className="sidebar-toggler"
        >
          {!!sidebarOpen && sidebarOpen ? <CloseIcon /> : <Menubar />}
        </button>
        {title ? (
          <h1>{title}</h1>
        ) : (
          <div className="logo">
            <Logo size="lg" />
          </div>
        )}
      </div>

      <div>
        <CircleFrame
          onClick={() => {
            setDropdown((prev) => !prev)
          }}
          circleSize="sm"
          image={profileImage}
        />
        <StyledDropdown
          initial={{ opacity: 0 }}
          animate={dropdown ? { opacity: 1 } : { opacity: 0 }}
        >
          <Link to="/dashboard/settings">Settings</Link>
          <Link to="#" onClick={logout}>
            Log out
          </Link>
        </StyledDropdown>
      </div>
    </StyledNav>
  )
}

export default HorizontalNav

export const StyledDropdown = styled(motion.div)`
  position: absolute;
  top: 65px;
  right: 0.7rem;
  border-radius: 12px;
  box-shadow: 0px 10px 15px ${({ theme }) => theme.black.matteblack + '6e'};
  backdrop-filter: blur(40px);
  width: fit-content;
  max-width: 145px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.black.dark2 + 'ee'};
  a {
    padding: 0.8rem 1rem;
    padding-top: 12px;
    padding-bottom: 21px;
    padding-inline: 24px;
    text-decoration: none;
    display: inline-block;
    color: ${({ theme }) => theme.primary.sea3};
    background: ${({ theme }) => theme.black.dark2 + 'ee'};
    width: 100%;
    :hover {
      background: red;
      background: ${({ theme }) => theme.black.dark1 + 'de'};
    }
  }
`

const StyledNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  min-height: 45px;
  background: ${({ theme }) => theme.black.dark4};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1.5rem;

  @media (max-width: ${breakpoint.mobile}px) {
    min-height: 60px;
  }

  @media (min-width: ${breakpoint.desktop}px) {
    min-height: 68px;
  }

  .logo {
    display: flex;
    /* padding-left: 2rem; */
  }
  .sidebar-toggler {
    border: none;
    background: none;
    cursor: pointer;
    color: ${({ theme }) => theme.primary.white};
    margin-right: 1.5rem;

    @media (max-width: ${breakpoint.mobile}px) {
      margin-right: 1rem;
    }
  }
`
