import styled from '@emotion/styled';
// import Markdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import Spacer from '../../ui/atom/spacer/spacer';
import TextWrap from '../../ui/atom/typography/TextWrap';
import breakpoint from '../../ui/configs/breakpoint';
// import litepaper from './litepaper';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useState } from 'react';

// @ts-ignore
import litepaperPDF from './litepaper.pdf';
import PDFLitePaper from './litepaperBase64PDF';

const LitePaper = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  return (
    <StyledLitePaper>
      <div className='content'>
        <Document
          options={{ workerSrc: '/pdf.worker.js' }}
          file={PDFLitePaper}
          onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
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
    max-width: 700px;
    margin: 0 auto;
    padding-inline: 1rem;
    padding-block: 3rem;
  }
`;
