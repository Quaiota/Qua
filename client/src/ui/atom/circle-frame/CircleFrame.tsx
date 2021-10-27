import { css } from '@emotion/react'
import styled from '@emotion/styled'

export interface ICircleFrame {
  image?: string
  icon?: string
  border?: boolean
  borderColor?: string
  circleSize: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

const CircleFrame: React.FC<ICircleFrame> = ({ icon, image, ...rest }) => {
  return (
    <Container {...rest}>
      {image ? (
        <img src={image} alt="display" />
      ) : (
        <i className="fas fa-user"></i>
      )}
    </Container>
  )
}

const lg = css`
  width: 6.25rem;
  height: 6.25rem;
  .fas {
    font-size: 2.4rem;
    opacity: 0.8;
  }
`
const sm = css`
  width: 28px;
  height: 28px;
  .fas {
    font-size: 0.8rem;
    opacity: 0.8;
  }
`
const md = css`
  width: 40px;
  height: 40px;
  .fas {
    font-size: 1.2rem;
    opacity: 0.8;
  }
`

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
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.gradients.light};
  color: ${({ theme }) => theme.primary.white};

  img {
    width: 100%;
  }
`

export default CircleFrame
