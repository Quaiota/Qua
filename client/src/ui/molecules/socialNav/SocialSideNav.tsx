import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Button from '../../atom/button/Button'
import CircleFrame from '../../atom/circle-frame/CircleFrame'
import AppsIcon from '../../atom/icons/AppsIcon'
import BellIconGray from '../../atom/icons/BellIconGray'
import SendPostIcon from '../../atom/icons/SendPostIcon'
import breakpoint from '../../configs/breakpoint'

export const SocialSideNav = () => {
  return (
    <StyledSocialNav>
      <div className="title">
        <SocialLogo>
          <Link to="/social">Social </Link>
        </SocialLogo>
      </div>
      <div className="tabs">
        <Button className="tab-btn" btnType="transparent">
          <AppsIcon />
        </Button>
        <Button className="tab-btn" btnType="transparent">
          <BellIconGray />
        </Button>
        <Button className="tab-btn" btnType="transparent">
          <CircleFrame circleSize="sm" />
        </Button>
        <button className="send-post">
          <SendPostIcon />
        </button>
      </div>
    </StyledSocialNav>
  )
}

export default SocialSideNav

const StyledSocialNav = styled.div`
  display: flex;

  .title {
    display: none;
    padding: 0.8rem;
    text-align: center;
  }
  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .send-post {
    border: none;
    background: ${({ theme }) => theme.primary.hot1};
    /* padding: 1rem; */
    width: 50px;
    height: 50px;
    padding-top: 3px;
    padding-right: 3px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    
    @media (min-width: ${breakpoint.desktop}px) {
      margin-top: 4rem;
    }
  }
  
  @media (min-width: ${breakpoint.tab}px) {
    flex-direction: column;
    max-width: max-content;
    row-gap: 2rem;

    .title {
      display: block;
    }
    .tabs {
      flex-direction: column;
      row-gap: 1.5rem;
      display: flex;
      align-items: center;
      tab-btn {
        display: block;
        width: 100%;
        padding-block: 1.5rem;
        padding-inline: 0.8rem;
      }
    }
  }
`

const SocialLogo = styled.h1`
  font-style: normal;
  font-size: 24px;
  line-height: 33px;
  cursor: pointer;

  & a {
    font-family: Darker Grotesque;
    font-weight: 900;

    text-decoration: none;
    color: ${({ theme }) => theme.primary.sea3};
  }
`
