import { createSlice } from '@reduxjs/toolkit'
import cartItems from 'data/cartItems'

const initialState = {
  cartItems,
  total: 0,
  amount: 0,
  isLoading: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    }
  }
})

export const { clearCart } = cartSlice.actions

export default cartSlice.reducer
