import { Button, Stack, Typography } from '@mui/material'
import CartItem from 'components/CartItem'
import { openModal } from 'features/modal/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { StyledCartContainer, StyledDivider } from './style'

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((store: RootState) => store.cart)
  const dispatch = useDispatch()

  const renderCartItems = () => (
    <Stack my={6} gap={5}>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </Stack>
  )

  const renderTotalCart = () => (
    <Stack direction='row' justifyContent='space-between' my={3}>
      <Typography variant='h4' fontWeight={700} color='grey.300'>
        Total
      </Typography>
      <Typography variant='h4' fontWeight={700} color='grey.300'>
        $ {total.toFixed(2)}
      </Typography>
    </Stack>
  )

  return (
    <StyledCartContainer>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        spacing={2}
        mb={3}
      >
        <Typography variant='h2' fontWeight={700} color='grey.300' align='center'>
          YOUR BAG
        </Typography>
        <Stack alignItems='center' mt={2}>
          <Button
            variant='contained'
            color='error'
            size='medium'
            onClick={() => dispatch(openModal())}
          >
            Clear Cart
          </Button>
        </Stack>
      </Stack>
      {amount < 1 ? (
        <Typography variant='h4' fontWeight={700} color='grey.200' align='center' mt={4}>
          is currently empty
        </Typography>
      ) : (
        <>
          {renderCartItems()}
          <StyledDivider />
          {renderTotalCart()}
        </>
      )}
    </StyledCartContainer>
  )
}

export default CartContainer
