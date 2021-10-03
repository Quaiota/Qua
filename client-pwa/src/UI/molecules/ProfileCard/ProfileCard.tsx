import styled from '@emotion/styled';
import { Button } from '../../atom/Button/Button';
import CircleFrame from '../../atom/circle-frame/CircleFrame';
import Spacer from '../../atom/spacer/spacer';
import { Text } from '../../atom/Typography/Header';
import { theme } from '../../configs/theme';
const ProfileCard = () => {
  return (
    <StyledCard>
      <div>
        <CircleFrame
          circleSize='md'
          image='https://images.unsplash.com/photo-1606590179266-8290574f18b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          border={true}
        />
        <Spacer size='12px' />
        <Text>@Roosevelt</Text>
        <Spacer size='1rem' />
        <Button>Connect wallet</Button>
      </div>
    </StyledCard>
  );
};

export default ProfileCard;

const StyledCard = styled.div`
  padding: 1.3rem 0 1.3rem 0;
  background: ${theme.profileCard};
  display: flex;
  max-width: 25.125rem;
  width: 100%;
  min-height: 1.6rem;
  border-radius: 1.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
