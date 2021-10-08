import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react-router/node_modules/@types/react';

export interface ICircleFrame {
  image?: string;
  icon?: string;
  border?: boolean;
  borderColor?: string;
  circleSize: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const CircleFrame: FC<ICircleFrame> = ({ icon, image, ...rest }) => {
  const placeholder =
    'https://images.unsplash.com/photo-1606590179266-8290574f18b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
  return (
    <Container {...rest}>
      {image ? (
        <img src={image} alt='display' />
      ) : (
        <img src={placeholder} alt='display' />
      )}
      {/* // Todo: resolve to a better way to display icons  */}
      {icon && icon}
    </Container>
  );
};

const lg = css`
  width: 6.25rem;
  height: 6.25rem;
`;
const sm = css`
  width: 28px;
  height: 28px;
`;
const md = css`
  width: 40px;
  height: 40px;
`;

const Container = styled.div<ICircleFrame>`
  ${sm}
  ${(props) => props.circleSize === 'md' && md};
  ${(props) => props.circleSize === 'lg' && lg};

  border: ${(props) =>
    props.border &&
    ` ${props.circleSize === 'sm' ? '2px' : '4px'} solid ${
      props.borderColor ?? props.theme.black.matteblack
    }`};
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  display: inline-block;
  cursor: pointer;
  background: ${({ theme }) => theme.gradients.light};

  img {
    width: 100%;
  }
`;

export default CircleFrame;
