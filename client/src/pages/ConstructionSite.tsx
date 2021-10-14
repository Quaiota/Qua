import styled from '@emotion/styled';
import Button from '../ui/atom/button/Button';
import BoostIcon from '../ui/atom/icons/BoostIcon';
import CommentIcon from '../ui/atom/icons/CommentIcon';
import LikeIcon from '../ui/atom/icons/LikeIcon';
import ShareIcon from '../ui/atom/icons/ShareIcon';
import TextWrap from '../ui/atom/typography/TextWrap';
import breakpoint from '../ui/configs/breakpoint';
import CheckBox from '../ui/molecules/checkBox/CheckBox';
import ProfileHeader from '../ui/molecules/profileHeader/ProfileHeader';

const ConstructionSite = () => {
  return (
    <StyledComment>
      <ProfileHeader size='default' />
      <TextWrap className='text'>
        Probably @punk6529 actually buying Fidenza town in Italy and dedicating
        it to all things NFT art and community.
      </TextWrap>
      <div className='comment-actions-box'>
        <Button btnType='transparent'>
          <CommentIcon />
          <span>0</span>
        </Button>
        <Button btnType='transparent'>
          <LikeIcon />
          <span>0</span>
        </Button>
        <Button btnType='transparent'>
          <BoostIcon />
          <span>0</span>
        </Button>
        <Button btnType='transparent'>
          <ShareIcon />
        </Button>
      </div>
    </StyledComment>
  );
};

const StyledComment = styled.div`
  max-width: 400px;
  /* border: 1px gray solid; */
  margin: 0 auto;
  padding-block: 12px;
  .text {
    font-size: 13px;
    padding-inline: 1rem;
    padding-block: 0.5em;
  }
  .comment-actions-box {
    display: flex;
    justify-content: space-between;
    button {
      display: inline-flex;
      align-items: center;
      svg {
        fill: white;
      }
      span {
        padding-left: 6px;
        font-style: normal;
        font-weight: 800;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`;

export default ConstructionSite;
