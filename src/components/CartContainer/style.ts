import { css, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

export const StyledCartContainer = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacing(10, 0)};
    width: 100%;
  `}
`

export const StyledDivider = styled(Divider)`
  border-color: lightgray;
  border-radius: 10px;
  border-width: 2px;
`
