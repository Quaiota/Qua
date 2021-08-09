import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html { 
    overflow-x: hidden; 
    width: 100%;
    height: 100%;
}
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: #0E0F0F;
  }
`

export default GlobalStyle
