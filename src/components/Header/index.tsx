import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { StyledToolbar } from './style'

const Header = () => {
  const amount = useSelector((store: RootState) => store.cart.amount)
  return (
    <AppBar position='static'>
      <StyledToolbar>
        <Typography variant='h3' fontWeight={700}>
          Redux Toolkit
        </Typography>
        <IconButton color='inherit'>
          <Badge badgeContent={amount} color='error'>
            <LocalMallOutlinedIcon fontSize='large' />
          </Badge>
        </IconButton>
      </StyledToolbar>
    </AppBar>
  )
}

export default Header
