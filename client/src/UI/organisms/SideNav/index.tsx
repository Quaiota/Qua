import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import SearchIcon from '../../atom/icons/SearchIcon';
import SocialIcon from '../../atom/icons/SocialIcon';
import Spacer from '../../atom/spacer/spacer';
import TextWrap from '../../atom/Typography/TextWrap';

export interface ISideNav {
  open: boolean;
}
const SideNav: React.FC<ISideNav> = ({ open }) => {
  const initWidth = { maxWidth: '80px' };
  const maxWidth = { maxWidth: '268px' };
  return (
    <StyledSideNav
      open={open}
      initial={initWidth}
      animate={open ? maxWidth : initWidth}>
      {open && (
        <>
          {/* search input */}
          <StyledSearchInput>
            <SearchIcon /> <input type='text' placeholder='Search' />
          </StyledSearchInput>
        </>
      )}
      <StyledNavBox>
        {open && (
          <>
            <Spacer size='1rem' />
            <TextWrap fontSize='caption'>MY APPS</TextWrap>
          </>
        )}
        <Spacer size='1rem' />
        {/* sidebar items */}
        <StyledSidebarItem>
          <SocialIcon /> {open && <p>Social</p>}
        </StyledSidebarItem>
      </StyledNavBox>
      <button className='connectbutton'>
        <span>Connect apps</span>
      </button>
    </StyledSideNav>
  );
};

export default SideNav;

const StyledSideNav = styled(motion.section)<{ open: boolean }>`
  background: ${({ theme }) => theme.black.dark3};
  max-width: 80px;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  transition: width 0.23s ease-in-out;
  position: relative;
  overflow: auto;

  .connectbutton {
    position: absolute;
    width: 100%;
    display: inline-block;
    bottom: 0;
    background: ${({ theme }) => theme.black.dark3};

    border: none;
    left: 0;
    right: 0;
    padding: 1rem;
  }

  @media screen and (max-width: 810px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
`;

const StyledNavBox = styled.div``;

const StyledSidebarItem = styled(motion.div)`
  padding: 1rem;
  color: ${({ theme }) => theme.primary.white};
  display: flex;
  align-items: center;
  p {
    padding-left: 22px;
  }
`;

const StyledSearchInput = styled(motion.div)`
  background: ${({ theme }) => theme.black.dark2};
  padding-inline: 1rem;
  display: flex;
  border-radius: 8px;
  align-items: center;
  svg {
    fill: ${({ theme }) => theme.primary.white};
  }
  input {
    margin-left: 12px;
    background: none;
    border: none;
    padding: 5px;
    display: inline-block;
    width: 100%;
    outline: 1px;
    color: ${({ theme }) => theme.primary.white};
  }
`;
