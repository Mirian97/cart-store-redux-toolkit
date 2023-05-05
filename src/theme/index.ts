import { createTheme } from '@mui/material'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1440,
      lg: 0,
      xl: 0
    }
  },
  palette: {
    primary: {
      main: '#645cff'
    },
    grey: {
      100: '#f1f5f8',
      200: '#617d98',
      300: '#102a42'
    },
    error: {
      main: '#EB0014'
    },
    background: {
      default: '#f1f5f8',
      paper: '#FFFFFF'
    }
  },
  shape: {
    borderRadius: 24
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    button: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: '3rem',
      color: '#2D172C',
      textTransform: 'none',
      minHeight: 62
    }
  }
})

export default theme
