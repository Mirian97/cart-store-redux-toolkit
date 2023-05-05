import { Button, Divider, Stack, Typography } from '@mui/material'
import CartItem from 'components/CartItem'
import { clearCart } from 'features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { StyledCartContainer } from './style'

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((store: RootState) => store.cart)
  const dispatch = useDispatch()

  const renderCartItems = () => (
    <>
      {amount < 1 ? (
        <Stack my={6} gap={5}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      ) : (
        <Typography variant='h4' fontWeight={700} color='grey.200' align='center'>
          is currently empty
        </Typography>
      )}
    </>
  )

  const renderTotalCart = () => (
    <Stack direction='row' justifyContent='space-between' my={3}>
      <Typography variant='h4' fontWeight={700} color='grey.300'>
        Total
      </Typography>
      <Typography variant='h4' fontWeight={700} color='grey.300'>
        $ {total}
      </Typography>
    </Stack>
  )

  return (
    <StyledCartContainer>
      <Typography variant='h1' fontWeight={700} color='grey.300' align='center'>
        YOUR BAG
      </Typography>
      {renderCartItems()}
      <Divider />
      {renderTotalCart()}
      <Stack alignItems='center' mt={2}>
        <Button variant='outlined' color='error' onClick={() => dispatch(clearCart())}>
          CLEAR CART
        </Button>
      </Stack>
    </StyledCartContainer>
  )
}

export default CartContainer
