import { Modal as MuiModal } from '@mui/material'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

const Modal = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  return (
    <MuiModal open={open} onClose={handleClose}>
      <Paper>
        <Typography variant='h5'>Remove All Items From Your Shopping Cart?</Typography>
        <Button color='primary'>CONFIRM</Button>
        <Button color='error'>CANCEL</Button>
      </Paper>
    </MuiModal>
  )
}

export default Modal
