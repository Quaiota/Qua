import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router';
import Button from '../../ui/atom/button/Button';
import Spacer from '../../ui/atom/spacer/spacer';
import TextWrap from '../../ui/atom/typography/TextWrap';

const EmptyFeed = () => {
  const theme = useTheme();
  const history = useHistory();
  const routeToOnboarding = () => {
    history.push('/onboarding/social');
  };
  return (
    <StyledContainer>
      <div className='container'>
        <TextWrap fontSize='h1'>SOCIAL FEED</TextWrap>
        <Spacer size='12px' />
        <TextWrap fontSize='bodymd' className='text'>
          The latest conversations on topics you care about will appear here.
        </TextWrap>
        <Spacer size='12px' />
        <Button
          onClick={routeToOnboarding}
          bold='bold'
          className='onboard-btn'
          btnType='solid'
          bgColor={theme.primary.pop1}>
          Take Onboarding
        </Button>
      </div>
    </StyledContainer>
  );
};

export default EmptyFeed;

const StyledContainer = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .container {
    .text {
      width: 40ch;
    }
    .onboard-btn {
      margin-top: 1.5rem;
      color: ${({ theme }) => theme.black.matteblack};
    }
  }
`;
