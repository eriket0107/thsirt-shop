import { ButtonHTMLAttributes, ElementType } from 'react'

export interface ButtonIconType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
  cartLength?: number
}
