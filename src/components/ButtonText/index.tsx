'use client'
import Link from 'next/link'

import { Icon } from './components/icon'
import { ButtonTextType } from '@/interfaces'

export function ButtonText({ text, href, className, icon }: ButtonTextType) {
  return (
    <Link href={href || ''} className={className}>
      {icon && <Icon type={icon} />}
      {text}
    </Link>
  )
}
