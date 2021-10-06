import styled from '@emotion/styled';
import AddIcon from '../../atom/icons/AddIcon';
import AvatarIcon from '../../atom/icons/AvatarIcon';
import Spacer from '../../atom/spacer/spacer';
import TextWrap from '../../atom/typography/TextWrap';

const AddStatus = () => {
  return (
    <StyledAddStatus>
      <StyledAdd>
        <AvatarIcon />
        <span>
          <AddIcon />
        </span>
      </StyledAdd>
      <Spacer size='12px' />
      <TextWrap fontSize='bodymd'>Your wall</TextWrap>
    </StyledAddStatus>
  );
};

export default AddStatus;

const StyledAdd = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  position: relative;
  border: none;
  background: ${({ theme }) => theme.black.dark1};
  transition: all 0.23s ease-in;
  :hover {
    background: ${({ theme }) => theme.primary.pop1};
  }
  span {
    position: absolute;
    bottom: 0px;
    right: 0px;
    background: ${({ theme }) => theme.accent.yellow};
    display: inline-flex;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }
`;

const StyledAddStatus = styled.div`
  width: fit-content;
  padding: 8px;
  text-align: center;
`;
