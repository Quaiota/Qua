import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

export interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  btnType?: 'solid' | 'outlined' | 'transparent'
  bgColor?: string
  textColor?: string
  bold?: 'bold' | 'bolder' | 'normal' | '500' | 'lighter'
}

const Button: React.FC<IButton> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

const transparent = css`
  border: none;
  background: transparent;
`

export const StyledButton = styled.button<IButton>`
  font-style: normal;
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: 0.15px;
  border: none;
  color: ${({ theme, textColor }) => textColor ?? theme.primary.white};
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50px;
  padding: 0.75rem 1rem;
  font-weight: ${({ bold }) => bold ?? 'normal'};

  outline: none;

  ${({ btnType }) => btnType === 'transparent' && transparent}
  ${({ btnType, theme, bgColor }) =>
    btnType === 'outlined' &&
    css`
      border: 1px ${bgColor ?? theme.primary.white + 'a1'} solid;
      background: ${bgColor ? bgColor + '01' : theme.primary.white + '01'};
    `};
  ${({ btnType, theme, bgColor }) =>
    btnType === 'solid' &&
    css`
      /* border: 1px ${bgColor ?? theme.primary.white + '00'} solid; */
      background: ${bgColor ? bgColor : theme.primary.sea3 + '12'};

      :disabled {
        background: ${bgColor ? bgColor + '33' : theme.primary.white + '22'};
        color: ${theme.black.dark1 + '55'};
      }
    `}

  cursor: pointer;
`

export default Button
