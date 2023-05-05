import { Grid, css, styled } from '@mui/material'

export const StyledCartItem = styled(Grid)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;

    img {
      width: 150px;
    }
  `}
`
