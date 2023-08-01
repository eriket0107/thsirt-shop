import { ButtonHTMLAttributes } from 'react'
import { ProductType } from '.'

export interface CheckoutButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  cart: ProductType[]
}
