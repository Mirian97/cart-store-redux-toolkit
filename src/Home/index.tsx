/* eslint-disable react-hooks/exhaustive-deps */
import CartContainer from 'components/CartContainer'
import Header from 'components/Header'
import Modal from 'components/Modal'
import { calculateTotal } from 'features/cartSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { StyledHomeContainer, StyledHomeContent } from './style'

const Home = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  return (
    <StyledHomeContainer>
      <Header />
      <StyledHomeContent>
        <CartContainer />
      </StyledHomeContent>
      <Modal />
    </StyledHomeContainer>
  )
}

export default Home
