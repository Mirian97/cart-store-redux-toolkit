import { css, styled } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'

export const StyledToolbar = styled(Toolbar)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${theme.spacing(1.5, 2)};
    flex-grow: 1;
  `}
`
