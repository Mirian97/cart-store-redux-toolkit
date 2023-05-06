import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cartItems from 'data/cartItems'
import api from 'services/api'

const initialState = {
  cartItems,
  total: 0,
  amount: 0,
  isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async (_, thunkAPI) => {
  try {
    const { data } = await api.get('/')
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: 'Something went wrong! :(' })
  }
})

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
    },
    increase: (state, { payload }: PayloadAction<string>) => {
      const cartItem = state.cartItems.find((item) => item.id === payload)
      cartItem.amount++
    },
    decrease: (state, { payload }: PayloadAction<string>) => {
      const cartItem = state.cartItems.find((item) => item.id === payload)
      cartItem.amount--
    },
    calculateTotal: (state) => {
      const { total, amount } = state.cartItems.reduce(
        (accumulator, item) => {
          const itemTotal = item.amount * item.price
          accumulator.amount += item.amount
          accumulator.total += itemTotal
          return accumulator
        },
        { total: 0, amount: 0 }
      )
      state.total = total
      state.amount = amount
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.cartItems = action.payload
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false
      })
  }
})

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions

export default cartSlice.reducer
