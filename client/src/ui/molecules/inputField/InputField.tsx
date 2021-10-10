import styled from '@emotion/styled';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import TextWrap from '../../atom/typography/TextWrap';

export interface IInputFieid
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name: string;
  atSign?: boolean;
}

const InputField: React.FC<IInputFieid> = ({
  atSign,
  label,
  name,
  ...rest
}) => {
  return (
    <StyledInputField>
      {label && <label htmlFor={name}>{label}</label>}
      <div>
        {atSign && <TextWrap color='gray'>@</TextWrap>}
        <input name={name} id={name} {...rest} />
      </div>
    </StyledInputField>
  );
};

export default InputField;

const StyledInputField = styled.div`
  color: gray;
  border-bottom: 1px gray solid;
  padding-bottom: 5px;
  width: 100%;
  label {
    text-transform: capitalize;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
  }
  div {
    padding-top: 12px;
    display: flex;
    align-items: center;
    input {
      margin-left: 3px;
      padding: 5px 0px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      border: none;
      width: 100%;
      background: none;
      color: ${({ theme }) => theme.black.matteblack + 'b2'};
      ::placeholder {
        color: ${({ theme }) => theme.black.matteblack + '5a'};
      }
      &:focus {
        outline: none;
      }
    }
  }
`;
