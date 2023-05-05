import { PayloadAction, createSlice } from '@reduxjs/toolkit'
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
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    }
  }
})

export const { clearCart, removeItem } = cartSlice.actions

export default cartSlice.reducer
