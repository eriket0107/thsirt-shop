'use client'
import Link from 'next/link'

import { Icon } from './components/icon'
import { ButtonTextType } from '@/interfaces'

export function ButtonText({
  text,
  href,
  className,
  icon,
  ...rest
}: ButtonTextType) {
  return (
    <>
      {href ? (
        <Link href={href || ''} className={className}>
          {icon && <Icon type={icon} />}
          {text}
        </Link>
      ) : (
        <button className={className} {...rest}>
          {icon && <Icon type={icon} />}
          {text}
        </button>
      )}
    </>
  )
}
