import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import { Grid, css, styled } from '@mui/material'

export const StyledCartItem = styled(Grid)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    img {
      width: 150px;
    }
  `}
`

export const StyledArrowUpIcon = styled(KeyboardArrowUpRoundedIcon)`
  font-size: 40px;
`
export const StyledArrowDownIcon = styled(KeyboardArrowDownRoundedIcon)`
  font-size: 40px;
`
