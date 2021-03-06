import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../../App'
import CloseIcon from '../../atom/icons/Close'
import Menubar from '../../atom/icons/MenuBar'
import MoreHorizontal from '../../atom/icons/MoreHorizontal'
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
  const dropdownInitState = { opacity: 0, display: 'none' }
  const dropdownAnimate = { opacity: 1, display: 'flex' }
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
        <button
          className="sidebar-toggler"
          onClick={() => {
            setDropdown((prev) => !prev)
          }}
        >
          <MoreHorizontal />
        </button>

        <StyledDropdown
          initial={dropdownInitState}
          animate={dropdown ? dropdownAnimate : dropdownInitState}
        >
          {/* <Link to={`/dashboard/settings`}>Settings</Link> */}
          <Link to="#" onClick={store.logout}>
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
  /* display: flex; */
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
  background: ${({ theme }) => theme.black.matteblack};
  border-bottom: 1px ${({ theme }) => theme.primary.sea3 + '0a'} solid;
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
