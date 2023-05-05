import LocalMallIcon from '@mui/icons-material/LocalMall'
import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { StyledToolbar } from './style'

const Header = () => (
  <AppBar position='static'>
    <StyledToolbar>
      <Typography variant='h3' fontWeight={700}>
        Redux Toolkit
      </Typography>
      <IconButton color='inherit'>
        <Badge badgeContent={4} color='error'>
          <LocalMallIcon fontSize='large' />
        </Badge>
      </IconButton>
    </StyledToolbar>
  </AppBar>
)

export default Header
