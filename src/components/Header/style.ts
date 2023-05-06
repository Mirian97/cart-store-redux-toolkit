import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import { css, styled } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Toolbar from '@mui/material/Toolbar'

export const StyledAppBar = styled(AppBar)`
  position: static;
  flex-direction: row;
  justify-content: center;
`

export const StyledToolbar = styled(Toolbar)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing(1.5, 2)};
    flex-grow: 1;
    max-width: 1350px;
  `}
`

export const StyledBadge = styled(Badge)`
  & span {
    font-size: 1.2rem;
    z-index: 0;
  }
`

export const StyledBagIcon = styled(LocalMallOutlinedIcon)`
  font-size: 44px;
`
