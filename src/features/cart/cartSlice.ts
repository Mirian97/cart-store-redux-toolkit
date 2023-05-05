import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  total: 0,
  amount: 0,
  isLoading: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: undefined
})

export default cartSlice.reducer
