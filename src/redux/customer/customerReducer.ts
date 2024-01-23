import type { CustomerState } from './customerState'
import { STORAGE_KEY } from '@/data/storagekeys'
import type { CartProduct, Product } from '@/types'
import { type CaseReducer, type PayloadAction } from '@reduxjs/toolkit'

const saveToLocalStorage = (state: CustomerState): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export const addToCart: CaseReducer<CustomerState, PayloadAction<Product>> = (
  state,
  action,
) => {
  const cartProduct = state.cart.find(
    (product) => product.id === action.payload.id,
  )

  if (cartProduct) {
    cartProduct.quantity += 1
  } else {
    state.cart.push({
      ...action.payload,
      quantity: 1,
    })
  }

  saveToLocalStorage(state)
}

export const removeFromCart: CaseReducer<
  CustomerState,
  PayloadAction<CartProduct>
> = (state, action) => {
  state.cart = state.cart.filter((product) => product.id !== action.payload.id)
  saveToLocalStorage(state)
}

export const increaseQuantity: CaseReducer<
  CustomerState,
  PayloadAction<CartProduct>
> = (state, action) => {
  const cartProduct = state.cart.find(
    (product) => product.id === action.payload.id,
  )

  if (cartProduct) {
    cartProduct.quantity += 1
    saveToLocalStorage(state)
  }
}

export const decreaseQuantity: CaseReducer<
  CustomerState,
  PayloadAction<CartProduct>
> = (state, action) => {
  const cartProduct = state.cart.find(
    (product) => product.id === action.payload.id,
  )

  if (cartProduct) {
    cartProduct.quantity -= 1
    if (cartProduct.quantity === 0) {
      state.cart = state.cart.filter((product) => product.id !== cartProduct.id)
    }
    saveToLocalStorage(state)
  }
}

export const addToFavorites: CaseReducer<
  CustomerState,
  PayloadAction<Product>
> = (state, action) => {
  const product = state.favorites.find(
    (product) => product.id === action.payload.id,
  )

  if (!product) {
    state.favorites.push(action.payload)
    saveToLocalStorage(state)
  } else {
    state.favorites = state.favorites.filter(
      (product) => product.id !== action.payload.id,
    )
    saveToLocalStorage(state)
  }
}
