import { ButtonHTMLAttributes, ElementType } from 'react'

export interface ButtonTextType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  href?: string
  className: string
  icon?: ElementType
}
