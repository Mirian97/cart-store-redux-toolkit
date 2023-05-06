import { css, styled } from '@mui/material'
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'

export const StyledModal = styled(Modal)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const StyledPaper = styled(Paper)`
  ${({ theme }) => css`
    padding: ${theme.spacing(3, 4)};
    max-width: 400px;
  `}
`
