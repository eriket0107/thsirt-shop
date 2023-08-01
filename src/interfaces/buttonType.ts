import { ButtonHTMLAttributes } from 'react'
import { ProductType } from '.'

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  cart?: ProductType[]
  product?: ProductType
  text: string
  className: string
  action: 'add' | 'checkout'
}
