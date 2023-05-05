export interface ICartItem {
  id: string
  title: string
  price: number
  img: string
  amount: number
}

export interface ICart {
  cartItems: ICartItem[]
  total: number
  amount: number
  isLoading: boolean
}
