import styled from '@emotion/styled';
import { theme } from '../../configs/theme';

const RoundPic = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 4px solid ${theme.black};
  overflow: hidden;
  object-fit: cover;
  object-position: center;
`;

export default RoundPic;
