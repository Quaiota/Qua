import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '../../atom/button/Button';
import Spacer from '../../atom/spacer/spacer';
import TextWrap from '../../atom/typography/TextWrap';

const EmptyWall = () => {
  const color = useTheme();
  return (
    <StyledContainer>
      <div>
        <TextWrap fontSize='h1'>STATUS WALL</TextWrap>
        <Spacer size='1rem' />
        <TextWrap fontSize='bodymd' color={color.primary.sea3}>
          Recent updates from your connections and <br /> topics you follow will
          appear here.
        </TextWrap>
        <Spacer size='2rem' />
        <Button> Take Onboarding</Button>
      </div>
    </StyledContainer>
  );
};

export default EmptyWall;

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  div {
    margin: auto;
    text-align: center;
  }
`;
