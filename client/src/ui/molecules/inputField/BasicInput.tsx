import styled from '@emotion/styled';
import React from 'react';
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react-router/node_modules/@types/react';
import TextWrap from '../../atom/typography/TextWrap';

interface IBasicInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const BasicInput: React.FC<IBasicInput> = ({ label, ...rest }) => {
  return (
    <StyledInput>
      <label htmlFor='password'>
        <TextWrap>{label ?? ''}</TextWrap>
      </label>
      <input {...rest} />
    </StyledInput>
  );
};

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  input {
    border: none;
    background: ${({ theme }) => theme.primary.white + '00'};
    padding: 1rem 12px;
    font-size: 1rem;
    color: ${({ theme }) => theme.primary.white};

    border-bottom: 1px ${({ theme }) => theme.primary.white + '1a'} solid;
    &:focus {
      border-bottom: 1px ${({ theme }) => theme.primary.white + '3a'} solid;
      outline: none;
    }
  }
`;

export default BasicInput;
