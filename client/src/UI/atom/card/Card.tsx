import styled from '@emotion/styled';
import { FC } from 'react-router/node_modules/@types/react';
export interface ICard {
  color?: string;
  children: React.ReactNode;
}
const Card: FC<ICard> = ({ color, children }) => {
  return <StyledCard color={color}>{children}</StyledCard>;
};

const StyledCard = styled.div`
  background: ${({ theme }) => theme.gradients.dark1};
  border-radius: 24px;
  padding: 24px;
  width: 100%;
`;

export default Card;