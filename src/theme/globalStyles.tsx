import { GlobalStyles as MUIGlobalStyles, css } from '@mui/material'

const CSStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
  }

  img {
    display: flex;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }
`

const GlobalStyles = () => <MUIGlobalStyles styles={CSStyles} />

export default GlobalStyles
