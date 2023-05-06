import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

interface ILoading {
  open: boolean
}

const Loading = ({ open }: ILoading) => (
  <Backdrop open={open}>
    <CircularProgress color='primary' />
  </Backdrop>
)

export default Loading
