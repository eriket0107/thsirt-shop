import { ButtonHTMLAttributes } from 'react'
import { ProductType } from '.'

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  product?: ProductType
  productId?: string
  text: string
  className: string
  action: 'add' | 'checkout'
}
