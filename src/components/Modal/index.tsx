import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { clearCart } from 'features/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { StyledModal, StyledPaper } from './style'

const Modal = ({ open, closeModal }) => {
  const dispatch = useDispatch()
  return (
    <StyledModal open={open} onClose={closeModal}>
      <StyledPaper>
        <Typography variant='h4' mb={3} align='center'>
          Remove All Items From Your Shopping Cart?
        </Typography>
        <Stack direction='row' gap={5} justifyContent='center'>
          <Button
            color='primary'
            variant='outlined'
            fullWidth
            onClick={() => {
              dispatch(clearCart())
              closeModal()
            }}
          >
            CONFIRM
          </Button>
          <Button color='error' variant='outlined' fullWidth onClick={closeModal}>
            CANCEL
          </Button>
        </Stack>
      </StyledPaper>
    </StyledModal>
  )
}

export default Modal
