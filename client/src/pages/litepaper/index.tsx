import styled from '@emotion/styled';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useState } from 'react';

// @ts-ignore
import litepaperPDF from './litepaper.pdf';
import PDFLitePaper from './litepaperBase64PDF';

const LitePaper = () => {
  const [numPages, setNumPages] = useState(null);
  const [downloadLink, setDownloadLink] = useState('');

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setDownloadLink(litepaperPDF);
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
        <div>
          {downloadLink && (
            <a
              className='download-link'
              href={downloadLink}
              download='Quaiota litepaper'>
              download as PDF
            </a>
          )}
        </div>
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

    .download-link {
      font-size: 1rem;
      font-weight: bold;
    }
  }
`;
