import styled from '@emotion/styled';
import { FC } from 'react';

import { css } from '@emotion/react';

interface ITextWrap {
  fontSize?: 'h1' | 'h2' | 'h3' | 'caption' | 'body' | 'bodysm' | 'bodymd';
  color?: string;
}
const TextWrap: FC<ITextWrap> = ({ color, fontSize: size, children }) => {
  return (
    <Heading color={color} fontSize={size}>
      {children}
    </Heading>
  );
};

export default TextWrap;

const h1 = css`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 53px;
`;

const h2 = css`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
`;

const h3 = css`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
`;
const caption = css`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
`;
const body = css`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const bodyMd = css`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
`;

const bodySm = css`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
`;

const Heading = styled.p<ITextWrap>`
  color: ${(props) => props.color ?? props.theme.primary.white};

  ${body}

  ${({ fontSize }) => fontSize === 'h1' && h1}
  ${({ fontSize }) => fontSize === 'h2' && h2}
  ${({ fontSize }) => fontSize === 'h3' && h3}
  ${({ fontSize }) => fontSize === 'caption' && caption}
  ${({ fontSize }) => fontSize === 'bodymd' && bodyMd}
  ${({ fontSize }) => fontSize === 'bodysm' && bodySm}
`;
