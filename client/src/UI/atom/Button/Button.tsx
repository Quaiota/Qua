import styled from '@emotion/styled';

export const Button = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.375rem;
  letter-spacing: 0.15px;
  border: none;
  color: ${({ theme }) => theme.primary.white};
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50px;
  padding: 0.75rem 1rem;
  transition: all 0.23s ease-in;

  &:hover,
  &:active {
    background: rgba(255, 255, 255, 0.3);
  }
`;
