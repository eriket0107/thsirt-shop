import { ButtonHTMLAttributes } from 'react'

type iconType = 'arrow' | 'x'

export interface ButtonTextType
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  href?: string
  className: string
  icon?: iconType
}
