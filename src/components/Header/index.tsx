import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { StyledAppBar, StyledBadge, StyledBagIcon, StyledToolbar } from './style'

const Header = () => {
  const amount = useSelector((store: RootState) => store.cart.amount)
  return (
    <StyledAppBar>
      <StyledToolbar>
        <Typography variant='h3' fontWeight={600}>
          Cart Store
        </Typography>
        <IconButton color='inherit'>
          <StyledBadge badgeContent={amount} color='error' showZero>
            <StyledBagIcon />
          </StyledBadge>
        </IconButton>
      </StyledToolbar>
    </StyledAppBar>
  )
}

export default Header
