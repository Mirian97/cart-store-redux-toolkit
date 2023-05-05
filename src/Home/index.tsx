import CartContainer from 'components/CartContainer'
import Header from 'components/Header'
import { StyledHomeContainer } from './style'

const Home = () => {
  return (
    <StyledHomeContainer>
      <Header />
      <CartContainer />
    </StyledHomeContainer>
  )
}

export default Home
