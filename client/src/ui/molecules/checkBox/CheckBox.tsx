import styled from '@emotion/styled';
import breakpoint from '../../configs/breakpoint';

interface ICheckBox {
  label?: string;
  name: string;
}

const CheckBox = ({ name, label }: ICheckBox) => {
  return (
    <StyledCheckItem>
      <input id={name} type='checkbox' />
      <label htmlFor={name}>{label}</label>
    </StyledCheckItem>
  );
};

const StyledCheckItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    cursor: pointer;
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row-reverse;
    font-style: normal;
    font-weight: bold;
    padding: 1rem;
    font-size: 16px;
    line-height: 26px;
    color: ${({ theme }) => theme.primary.white};
    transition: all 0.41s ease-in;
    border-radius: 8px;
    :hover {
      background: ${({ theme }) => theme.primary.white + '12'};
    }
    &::before {
      transition: all 0.41s ease-in;
      content: '';
      width: 1em;
      height: 1em;
      border-radius: 0.15em;
      border: 2px solid ${({ theme }) => theme.primary.white};
    }
    @media (min-width: ${breakpoint.tab}px) {
      font-size: 18px;
    }
  }
  input[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;

    :checked + label::before {
      content: '\\2713';
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.primary.white};
      color: ${({ theme }) => theme.accent.purple};
    }
  }
`;

export default CheckBox;
