import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonIconType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  className: string
  cartLength?: number
}
