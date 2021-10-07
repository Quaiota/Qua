import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import QuaIcon from '../icons/QuaIcon';
import TextWrap from '../typography/TextWrap';

const GraphToggle = () => {
  const colors = useTheme();

  return (
    <StyledBox>
      <div className='label'>
        <span>
          <QuaIcon /> 0
        </span>
        <TextWrap color={colors.primary.mint3} fontSize='bodysm'>
          Earned
        </TextWrap>
      </div>
    </StyledBox>
  );
};

export default GraphToggle;

const StyledBox = styled.div`
  /* max-width: 197px; */
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  padding: 1rem;
  padding-top: 1.5rem;

  .label {
    display: flex;
    align-items: center;
    padding-top: 12px;

    span {
      margin-right: 12px;
      padding: 4px;
      background: ${({ theme }) => theme.black.dark2};
      color: ${({ theme }) => theme.accent.yellow};
      border-radius: 1rem;
      text-align: center;
      display: flex;
      align-items: center;
      column-gap: 6px;
    }
  }
`;
