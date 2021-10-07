import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC } from 'react-router/node_modules/@types/react';
export interface ICard {
  color?: string;
  children: React.ReactNode;
}
const Card: FC<ICard> = ({ color, children }) => {
  return <StyledCard color={color}>{children}</StyledCard>;
};

const StyledCard = styled(motion.div)`
  background: ${({ theme, color }) => color ?? theme.gradients.dark1};
  border-radius: 24px;
  padding: 24px;
  width: 100%;
`;

export default Card;
