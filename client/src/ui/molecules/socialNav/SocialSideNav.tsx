import styled from '@emotion/styled';
import Button from '../../atom/button/Button';
import CircleFrame from '../../atom/circle-frame/CircleFrame';
import AppsIcon from '../../atom/icons/AppsIcon';
import BellIconGray from '../../atom/icons/BellIconGray';
import SendPostIcon from '../../atom/icons/SendPostIcon';
import TextWrap from '../../atom/typography/TextWrap';
import breakpoint from '../../configs/breakpoint';

export const SocialSideNav = () => {
  return (
    <StyledSocialNav>
      <div className='title'>
        <TextWrap fontSize='h2'>Social</TextWrap>
      </div>
      <div className='tabs'>
        <Button className='tab-btn' btnType='transparent'>
          <AppsIcon />
        </Button>
        <Button className='tab-btn' btnType='transparent'>
          <BellIconGray />
        </Button>
        <Button className='tab-btn' btnType='transparent'>
          <CircleFrame circleSize='sm' />
        </Button>
        <button className='send-post'>
          <SendPostIcon />
        </button>
      </div>
    </StyledSocialNav>
  );
};

export default SocialSideNav;

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
  }

  .send-post {
    border: none;
    background: ${({ theme }) => theme.primary.hot2};
    /* padding: 1rem; */
    width: 50px;
    height: 50px;
    padding-top: 3px;
    padding-right: 3px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  @media (min-width: ${breakpoint.tab}px) {
    flex-direction: column;
    max-width: max-content;

    .title {
      display: block;
    }
    .tabs {
      flex-direction: column;
      row-gap: 1.5rem;
      display: flex;
      align-self: center;
      tab-btn {
        display: block;
        width: 100%;
        padding-block: 1.5rem;
        padding-inline: 0.8rem;
      }
    }
  }
`;
