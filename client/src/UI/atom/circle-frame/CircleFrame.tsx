import styled from '@emotion/styled';
import { FC } from 'react-router/node_modules/@types/react';
import { theme } from '../../configs/theme';

export interface ICircleFrame {
  image?: string;
  icon?: string;
  border?: boolean;
  borderColor?: string;
  circleSize: 'sm' | 'md';
}

const CircleFrame: FC<ICircleFrame> = ({ icon, image, ...rest }) => {
  return (
    <Container {...rest}>
      {image && <img src={image} alt='display' />}
      {/* // Todo: resolve to a better way to display icons  */}
      {icon && icon}
    </Container>
  );
};

const Container = styled.div<ICircleFrame>`
  width: ${(props) => (props.circleSize === 'sm' ? '28px' : '5rem')};
  height: ${(props) => (props.circleSize === 'sm' ? '28px' : '5rem')};

  border: ${(props) =>
    props.border &&
    ` ${props.circleSize === 'sm' ? '2px' : '4px'} solid ${
      props.borderColor ?? theme.black
    }`};
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
  display: inline-block;
  background: ${theme.profileCard};

  img {
    width: 100%;
  }
`;

export default CircleFrame;
