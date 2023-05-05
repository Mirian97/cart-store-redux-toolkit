import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import { Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import { removeItem } from 'features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { CartItemProps } from './interface'
import { StyledCartItem } from './style'

const CartItem = ({ id, title, img, amount, price }: CartItemProps) => {
  const dispatch = useDispatch()
  return (
    <StyledCartItem container spacing={1}>
      <Grid item>
        <img src={img} alt={title} />
      </Grid>
      <Grid item xs={8.5}>
        <Typography variant='h4' fontWeight={700}>
          {title}
        </Typography>
        <Typography variant='h4' color='grey.200' my={2}>
          $ {price}
        </Typography>
        <Button onClick={() => dispatch(removeItem(id))}>remove</Button>
      </Grid>
      <Grid item xs>
        <Stack alignItems='center'>
          <IconButton>
            <KeyboardArrowUpRoundedIcon color='primary' fontSize='large' />
          </IconButton>
          <Typography variant='h3'>{amount}</Typography>
          <IconButton>
            <KeyboardArrowDownRoundedIcon color='primary' fontSize='large' />
          </IconButton>
        </Stack>
      </Grid>
    </StyledCartItem>
  )
}

export default CartItem
