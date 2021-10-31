import styled from '@emotion/styled';

interface IBackgroundOverlay {
  children: React.ReactNode;
  open: boolean;
}
const BackgroundOverlay = ({ children, open }: IBackgroundOverlay) => {
  return <StyledBacground open={open}>{children}</StyledBacground>;
};

export default BackgroundOverlay;

const StyledBacground = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.black.matteblack + 'a1'};
  backdrop-filter: blur(4px);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: flex-end;
  z-index: 1001;
`;
