import styled from '@emotion/styled';
import Button from '../../atom/button/Button';
import CircleFrame from '../../atom/circle-frame/CircleFrame';
import MoreHorizontal from '../../atom/icons/MoreHorizontal';
import TextWrap from '../../atom/typography/TextWrap';
import breakpoint from '../../configs/breakpoint';

export interface IProfileHeader {
  size?: 'default' | 'large';
}

const ProfileHeader: React.FC<IProfileHeader> = ({ size }) => {
  if (size === 'large')
    return (
      <StyledProfileHeaderLarge>
        <div className='wrapper'>
          <div>
            <CircleFrame circleSize='lg' />
          </div>
          <div className='detailbox'>
            <div className='detail'>
              <div className='name'>
                <TextWrap fontSize='h3' bold='bold'>
                  Angel Anold
                </TextWrap>
              </div>
              <div>
                <TextWrap fontSize='bodymd'>@Handle</TextWrap>
              </div>
            </div>
            <div className='menu'>
              <Button>Follow</Button>
            </div>
          </div>
        </div>
        <div className='about'>
          <TextWrap>
            Talks on tech, stocks, entrepreneurs & business history.
          </TextWrap>
          <section>
            <div>
              <TextWrap bold='bold' fontSize='bodymd'>
                100
              </TextWrap>
              <TextWrap fontSize='bodymd'>Following</TextWrap>
            </div>
            <div>
              <TextWrap fontSize='bodymd' bold='bold'>
                152
              </TextWrap>
              <TextWrap fontSize='bodymd'>Followers</TextWrap>
            </div>
          </section>
        </div>
      </StyledProfileHeaderLarge>
    );

  return (
    <StyledProfileHeaderWrapper>
      <div>
        <CircleFrame circleSize='md' />
      </div>
      <div className='detailbox'>
        <div className='detail'>
          <div className='name'>
            <TextWrap fontSize='bodymd' bold='bold'>
              Name
            </TextWrap>
            <TextWrap fontSize='bodymd'>5m</TextWrap>
          </div>
          <div>
            <TextWrap fontSize='bodymd'>@Handle</TextWrap>
          </div>
        </div>
        <div className='menu'>
          <Button btnType='transparent'>
            <MoreHorizontal />
          </Button>
        </div>
      </div>
    </StyledProfileHeaderWrapper>
  );
};

export default ProfileHeader;

const StyledProfileHeaderLarge = styled.div`
  .wrapper {
    display: flex;
    column-gap: 12px;
    width: 100%;
    align-items: center;
    .detailbox {
      align-items: flex-start;
      display: flex;
      justify-content: space-between;
      width: 100%;
      .menu {
        button {
          display: inline-flex;
          justify-content: center;
          align-items: flex-start;
        }
      }
      .detail {
        .name {
          display: flex;
          column-gap: 12px;
          padding-bottom: 8px;
        }
      }
    }
  }

  .about {
    padding-top: 1rem;
    section {
      display: flex;
      column-gap: 24px;
      padding-top: 1rem;
      div {
        column-gap: 4px;
        display: flex;
      }
    }
  }
  padding-inline: 16px;
  padding-block: 8px;
  @media (min-width: ${breakpoint.tab}px) {
    padding-inline: 20px;
    padding-block: 8px;
  }
`;

const StyledProfileHeaderWrapper = styled.div`
  display: flex;
  column-gap: 12px;
  width: 100%;
  align-items: flex-start;
  padding-inline: 20px;
  padding-block: 8px;

  .detailbox {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    width: 100%;
    .menu {
      button {
        display: inline-flex;
        justify-content: center;
        align-items: flex-start;
      }
    }
    .detail {
      .name {
        display: flex;
        column-gap: 12px;
      }
    }
  }

  padding-block: 8px;
  padding-inline: 16px;
  @media (min-width: ${breakpoint.tab}px) {
    padding-inline: 20px;
    padding-block: 8px;
  }
`;
