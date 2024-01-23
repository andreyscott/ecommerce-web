import { Product } from '.'

export type CartProduct = Product & {
  quantity: number
}
