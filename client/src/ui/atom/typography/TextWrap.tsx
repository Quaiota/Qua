import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FC } from 'react'
import breakpoint from '../../configs/breakpoint'

interface ITextWrap {
  fontSize?:
    | 'lg'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'caption'
    | 'body'
    | 'bodysm'
    | 'bodymd'
  fontFamily?: string
  color?: string
  bold?: 'bold' | 'bolder'
}
const TextWrap: FC<ITextWrap> = ({ children, ...rest }) => {
  return <Heading {...rest}>{children}</Heading>
}

export default TextWrap

const lg = css`
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  font-family: 'Darker Grotesque';
  @media (min-width: ${breakpoint.desktop}px) {
    font-family: Darker Grotesque;
    font-weight: 900;
    font-size: 72px;
    line-height: 98px;
  }
`

const h1 = css`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 35px;
  @media (min-width: ${breakpoint.desktop}px) {
    font-size: 36px;
    line-height: 53px;
  }
`

const h2 = css`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  @media (min-width: ${breakpoint.desktop}px) {
    font-size: 24px;
    line-height: 35px;
  }
`

const h3 = css`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  @media (min-width: ${breakpoint.desktop}px) {
  }
`
const caption = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  font-feature-settings: 'salt' on;
  color: #f6fef7;
  opacity: 0.8;
  @media (min-width: ${breakpoint.desktop}px) {
  }
`
const body = css`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  @media (min-width: ${breakpoint.desktop}px) {
  }
`

const bodyMd = css`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  @media (min-width: ${breakpoint.desktop}px) {
  }
`

const bodySm = css`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  @media (min-width: ${breakpoint.desktop}px) {
  }
`

const Heading = styled.p<ITextWrap>`
  color: ${(props) => props.color ?? props.theme.primary.sea3};

  ${body}
  ${({ fontSize }) => fontSize === 'lg' && lg}
  ${({ fontSize }) => fontSize === 'h1' && h1}
  ${({ fontSize }) => fontSize === 'h2' && h2}
  ${({ fontSize }) => fontSize === 'h3' && h3}
  ${({ fontSize }) => fontSize === 'caption' && caption}
  ${({ fontSize }) => fontSize === 'bodymd' && bodyMd}
  ${({ fontSize }) => fontSize === 'bodysm' && bodySm}
  font-weight: ${({ bold }) => bold && bold};
`
