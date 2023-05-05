import { css, styled } from '@mui/material'
import Box from '@mui/material/Box'

export const StyledCartContainer = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${theme.spacing(10, 0)};
    width: 100%;
  `}
`
