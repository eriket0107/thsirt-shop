import { ButtonHTMLAttributes } from 'react'
import { ProductType } from '.'

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  cart?: ProductType[]
  product?: ProductType
  productId?: string
  text: string
  className: string
  action: 'add' | 'checkout'
}
