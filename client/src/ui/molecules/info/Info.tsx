import styled from '@emotion/styled';
import InfoIcon from '../../atom/icons/InfoIcon';
import TextWrap from '../../atom/typography/TextWrap';
import breakpoint from '../../configs/breakpoint';

interface IInfo {
  text: string;
}
const Info: React.FC<IInfo> = ({ text }) => {
  return (
    <StyledInfo>
      <div>
        <InfoIcon />
      </div>
      <TextWrap fontSize='bodymd'>{text ?? ''}</TextWrap>
    </StyledInfo>
  );
};

export default Info;

export const StyledInfo = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.primary.white + '1b'};
  display: flex;
  column-gap: 6px;
  border-radius: 8px;
  width: fit-content;
  margin-block: 8px;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: ${breakpoint.tab}px) {
    align-items: center;
  }
`;
