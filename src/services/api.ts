import axios from 'axios'

export default axios.create({
  baseURL: 'https://course-api.com/react-useReducer-cart-project',
  headers: {
    'Content-Type': 'application/json'
  }
})
