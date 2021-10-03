import styled from '@emotion/styled';
import { FC } from 'react';
import { theme } from '../../configs/theme';

import { css } from '@emotion/react';

interface IHeader {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}
const Header: FC<IHeader> = ({ color, text, size }) => {
  return (
    <Heading color={color} size={size} text={text}>
      {text}
    </Heading>
  );
};

export default Header;

const lgHeader = css`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 43px;
  letter-spacing: 0.15px;
`;
const mdHeader = css`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
`;

const Heading = styled.h1<IHeader>`
  color: ${(props) => props.color ?? theme.white};
  font-weight: 900;
  font-size: 1.125rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0.12px;

  ${(props) => props.size === 'lg' && lgHeader}
  ${(props) => props.size === 'md' && mdHeader}
`;

export const Text = styled.p`
  color: ${theme.white};
`;
