'use client'
import Link from 'next/link'

import { ButtonTextType } from '@/interfaces'
import { ArrowLeft } from 'phosphor-react'

export function ButtonText({
  text,
  href,
  className,
  icon: Icon,
  ...rest
}: ButtonTextType) {
  return (
    <>
      {href ? (
        <Link href={href || ''} className={className}>
          {Icon && <Icon className="h-6 w-6" />}
          {text === 'Voltar' && <ArrowLeft />}
          {text}
        </Link>
      ) : (
        <button className={className} {...rest}>
          {Icon && <Icon className="h-6 w-6" />}
          {text}
        </button>
      )}
    </>
  )
}
