import styled from '@emotion/styled';
import { theme } from '../../configs/theme';

export const Heading1 = styled.h1`
  color: ${(props) => props.color ?? 'black'};
  font-weight: 900;
  font-size: 1.125rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0.12px;
`;

export const Text = styled.p`
  color: ${theme.white};
`;
