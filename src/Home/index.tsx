import CartContainer from 'components/CartContainer'
import Header from 'components/Header'
import { StyledHomeContainer, StyledHomeContent } from './style'

const Home = () => {
  return (
    <StyledHomeContainer>
      <Header />
      <StyledHomeContent>
        <CartContainer />
      </StyledHomeContent>
    </StyledHomeContainer>
  )
}

export default Home
