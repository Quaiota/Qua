import { css, Global, useTheme } from '@emotion/react'

const GlobalStyles = () => {
  const color = useTheme()
  return (
    <Global
      styles={css`
        ::-webkit-scrollbar {
          width: 0px;
          height: 0px;
          border-radius: 1rem;
        }
        ::-webkit-scrollbar-track {
          margin-block: 1em;
          background: ${color.black.dark4};
          transition: all 0.23s linear;
          :hover {
            background: ${color.black.dark1};
          }
        }
        ::-webkit-scrollbar-thumb {
          background: ${color.black.dark4};
          border-radius: 1rem;
        }
      `}
    />
  )
}

export default GlobalStyles
