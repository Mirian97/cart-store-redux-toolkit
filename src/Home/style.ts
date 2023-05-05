import { css, styled } from '@mui/material'
import Box from '@mui/material/Box'

export const StyledHomeContainer = styled(Box)`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.default};
    width: 100%;
    min-height: 100vh;
  `}
`
