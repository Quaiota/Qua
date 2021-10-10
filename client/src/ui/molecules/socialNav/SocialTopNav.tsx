import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import SearchIcon from '../../atom/icons/SearchIcon';
import TextWrap from '../../atom/typography/TextWrap';

const SocialTopNav = () => {
  return (
    <StyledSocialTopNav>
      <TextWrap fontSize='h3' bold='bold'>
        Feed
      </TextWrap>
      <StyledSearchInput>
        <SearchIcon /> <input type='text' placeholder='Search' />
      </StyledSearchInput>
    </StyledSocialTopNav>
  );
};

export default SocialTopNav;

const StyledSocialTopNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px ${({ theme }) => theme.primary.white + '23'} solid;
`;

const StyledSearchInput = styled(motion.div)`
  /* background: ${({ theme }) => theme.black.dark2}; */
  padding-inline: 0.5rem;
  display: flex;
  border-radius: 8px;
  align-items: center;
  max-width: 100px;
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
