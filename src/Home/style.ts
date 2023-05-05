import { Box, css, styled } from '@mui/material'

export const StyledHomeContainer = styled(Box)`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.default};
    width: 100%;
    min-height: 100vh;
  `}
`

export const StyledHomeContent = styled(Box)`
  ${({ theme }) => css`
    max-width: 1440px;
    margin: auto;
  `}
`
