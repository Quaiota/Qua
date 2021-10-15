import styled from '@emotion/styled';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import litepaper from './litepaper';

const LitePaper = () => {
  return (
    <StyledLitePaper>
      <div className='content'>
        <Markdown children={litepaper} remarkPlugins={[remarkGfm]} />
      </div>
    </StyledLitePaper>
  );
};

export default LitePaper;

const StyledLitePaper = styled.div`
  background: ${({ theme }) => theme.primary.white};
  min-height: 100vh;
  overflow-y: auto;
  .content {
    max-width: 900px;
    margin: 0 auto;
  }
`;
