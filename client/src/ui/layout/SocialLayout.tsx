import styled from '@emotion/styled';
import React from 'react';
import HorizontalNav from '../organisms/dashboardhorizontalNav/HorizontalNav';

const SocialLayout: React.FC = (props) => {
  return (
    <StyledSocialLayout>
      <HorizontalNav profileImage='' title='Social' />
      <main>{props.children}</main>
    </StyledSocialLayout>
  );
};

export default SocialLayout;

const StyledSocialLayout = styled.div`
  background: ${({ theme }) => theme.black.matteblack};
`;
