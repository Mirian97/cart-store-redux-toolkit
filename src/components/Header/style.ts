import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import { css, styled } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Toolbar from '@mui/material/Toolbar'

export const StyledAppBar = styled(AppBar)`
  position: sticky;
  top: 0;
  flex-direction: row;
  justify-content: center;
  background-color: #092635;
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
    font-size: 12px;
    z-index: 0;
    font-weight: 600;
  }
`

export const StyledBagIcon = styled(LocalMallOutlinedIcon)`
  font-size: 36px;
`
