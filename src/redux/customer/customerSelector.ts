import { RootState } from '@/redux/store'
import type { CustomerState } from './customerState'

export const getCartProducts = (state: RootState): CustomerState['cart'] => {
  return state.customer.cart
}

export const getFavoriteProducts = (
  state: RootState,
): CustomerState['favorites'] => {
  return state.customer.favorites
}
