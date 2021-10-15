import styled from '@emotion/styled';
import Button from '../../ui/atom/button/Button';
import TextWrap from '../../ui/atom/typography/TextWrap';
import breakpoint from '../../ui/configs/breakpoint';
import CheckBox from '../../ui/molecules/checkBox/CheckBox';

const SocialOnBoarding = () => {
  return (
    <SocialOnboard>
      <form className='wrapper'>
        <section className='pager'>
          <TextWrap fontSize='bodymd' bold='bold'>
            Onboarding
          </TextWrap>
          <TextWrap fontSize='bodymd' bold='bold'>
            1/1
          </TextWrap>
        </section>
        <div className='caption-box'>
          <TextWrap fontSize='h2'>Topic of Interests</TextWrap>
          <div className='sub-text'>
            <TextWrap fontSize='bodymd'>
              Add the topics that matter most to you, <br /> You can edit your
              topic of interest anytime.
            </TextWrap>
          </div>
        </div>
        <section className='checklist'>
          <CheckBox label='Academia' name='academia' />
          <CheckBox label='Arts & culture' name='arts' />
          <CheckBox label='Business & finance' name='business' />
          <CheckBox label='Careers' name='careers' />
          <CheckBox label='Design' name='design' />
          <CheckBox label='Entertainment' name='entertainment' />
          <CheckBox label='Fashion & beauty' name='fashionbeauty' />
          <CheckBox label='Fitness' name='Fitness' />
        </section>
        <div className='submit-box'>
          <Button type='submit' btnType='solid'>
            Complete
          </Button>
        </div>
      </form>
    </SocialOnboard>
  );
};

const SocialOnboard = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.accent.purple};
  .wrapper {
    max-width: 600px;
    padding-top: 2em;
    margin: 0 auto;
    padding-bottom: 4rem;
    @media (min-width: ${breakpoint.tab}px) {
      padding-bottom: 0rem;
    }

    .pager {
      display: flex;
      justify-content: space-between;
      padding-block: 12px;
    }
    .checklist {
      padding-block: 1rem;
    }
    .submit-box {
      padding-top: 1rem;
      position: fixed;
      bottom: 10px;
      width: 100%;
      display: flex;
      justify-content: center;
      right: 0;
      left: 0;
      bottom: 0;
      padding-bottom: 1rem;
      padding-inline: 1rem;
      background: ${({ theme }) => theme.accent.purple};

      button {
        display: flex;
        width: 100%;
        justify-content: center;
      }
      @media (min-width: ${breakpoint.tab}px) {
        margin: 0 auto;
        max-width: 340px;
        position: relative;
        bottom: unset;
      }
    }
    .caption-box {
      padding-top: 12px;
      .sub-text {
        padding-top: 8px;
      }
    }

    .pager,
    .caption-box {
      padding-inline: 1rem;
    }
  }
`;

export default SocialOnBoarding;
