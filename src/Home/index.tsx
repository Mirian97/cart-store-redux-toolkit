/* eslint-disable react-hooks/exhaustive-deps */
import CartContainer from 'components/CartContainer'
import Header from 'components/Header'
import Modal from 'components/Modal'
import { calculateTotal } from 'features/cart/cartSlice'
import { closeModal } from 'features/modal/modalSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { StyledHomeContainer, StyledHomeContent } from './style'

const Home = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart)
  const { isOpen } = useSelector((state: RootState) => state.modal)
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
      <Modal open={isOpen} closeModal={() => dispatch(closeModal())} />
    </StyledHomeContainer>
  )
}

export default Home
