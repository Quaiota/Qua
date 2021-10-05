import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  btnType?: 'solid' | 'outlined' | 'transparent';
  bgColor?: string;
  textColor?: string;
}

const Button: React.FC<IButton> = ({ children }, props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const transparent = css`
  border: none;
  background: transparent;
`;

export const StyledButton = styled(motion.button)<IButton>`
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: 0.15px;
  border: none;
  color: ${({ theme }) => theme.primary.white};
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50px;
  padding: 0.75rem 1rem;
  transition: all 0.23s ease-in;

  &:hover,
  &:active {
    background: rgba(255, 255, 255, 0.3);
  }

  ${(props) => props.btnType === 'transparent' && transparent}
  ${(props) =>
    props.btnType === 'outlined' &&
    css`
      border: 1px ${props.bgColor} solid;
      background: red;
    `}
`;

export default Button;
