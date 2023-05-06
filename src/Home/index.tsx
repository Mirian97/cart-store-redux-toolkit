/* eslint-disable react-hooks/exhaustive-deps */
import CartContainer from 'components/CartContainer'
import Header from 'components/Header'
import Loading from 'components/Loading'
import Modal from 'components/Modal'
import { calculateTotal, getCartItems } from 'features/cart/cartSlice'
import { closeModal } from 'features/modal/modalSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'store'
import { StyledHomeContainer, StyledHomeContent } from './style'

const Home = () => {
  const { cartItems, isLoading } = useSelector((state: RootState) => state.cart)
  const { isOpen } = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  return (
    <StyledHomeContainer>
      <Header />
      <StyledHomeContent>
        <Loading open={isLoading} />
        <CartContainer />
      </StyledHomeContent>
      <Modal open={isOpen} closeModal={() => dispatch(closeModal())} />
    </StyledHomeContainer>
  )
}

export default Home
