import { Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import { decrease, increase, removeItem } from 'features/cart/cartSlice'
import { ICartItem } from 'features/cart/interface'
import { useDispatch } from 'react-redux'
import { StyledArrowDownIcon, StyledArrowUpIcon, StyledCartItem } from './style'

const CartItem = ({ id, title, img, amount, price }: ICartItem) => {
  const dispatch = useDispatch()

  const handleDecreaseCartItem = () =>
    amount === 1 ? dispatch(removeItem(id)) : dispatch(decrease(id))

  return (
    <StyledCartItem container spacing={2}>
      <Grid size={{ xs: 12, sm: 'auto' }}>
        <Stack direction='row' justifyContent='center'>
          <img src={img} alt={title} />
        </Stack>
      </Grid>
      <Grid size={{ xs: 6, sm: 'grow' }}>
        <Typography variant='h4' fontWeight={700}>
          {title}
        </Typography>
        <Typography variant='h4' color='grey.200' my={2}>
          $ {price}
        </Typography>
        <Button onClick={() => dispatch(removeItem(id))}>Remove</Button>
      </Grid>
      <Grid size={{ xs: 6, sm: 'auto' }}>
        <Stack alignItems='flex-end'>
          <IconButton onClick={() => dispatch(increase(id))}>
            <StyledArrowUpIcon color='primary' />
          </IconButton>
          <Typography variant='h4' mr={3}>
            {amount}
          </Typography>
          <IconButton onClick={handleDecreaseCartItem}>
            <StyledArrowDownIcon color='primary' />
          </IconButton>
        </Stack>
      </Grid>
    </StyledCartItem>
  )
}

export default CartItem
