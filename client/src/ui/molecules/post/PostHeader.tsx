import { css } from '@emotion/react'
import styled from '@emotion/styled'
import TextWrap from '../../atom/typography/TextWrap'

// const url =
//   'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80';

interface IPostHeader {
  imageUrl?: string
}

const PostHeader: React.FC<IPostHeader> = ({ imageUrl }) => {
  return (
    <StyledHeader url={imageUrl}>
      {imageUrl && <img src={imageUrl} alt="" />}
      <div className="info">
        <figcaption>
          <TextWrap fontSize="h2">
            Cross-rollup NFT wrapper and migration ideas
          </TextWrap>
        </figcaption>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.figure<{ url?: string }>`
  max-height: 400px;
  height: 100%;
  position: relative;
  img {
    width: 100%;
  }

  .info {
    ${(props) =>
      props.url &&
      css`
        position: absolute;
        top: 0;
        bottom: 0;
      `}
    left: 0;
    right: 0;
    background: ${(props) => props.url && 'rgba(0, 0, 0, 0.3)'};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;

    figcaption {
      display: block;
      width: 100%;
    }
  }
`

export default PostHeader
