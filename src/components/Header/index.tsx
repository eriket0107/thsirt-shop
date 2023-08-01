'use client'
import Image from 'next/image'
import Link from 'next/link'

import { useCart } from '@/contexts/cartContext'

import logo from '@/assets/logo.svg'
import { ShoppingBag } from 'phosphor-react'

import { ButtonIcon } from '../ButtonIcon'

export function Header() {
  const { cart } = useCart()

  const cartLength = cart.length > 0 ? cart.length : 0

  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between py-8">
      <Link href={'/'}>
        <Image src={logo} alt="Logo Ignite" />
      </Link>

      <ButtonIcon
        className="
          relative 
          cursor-pointer 
          rounded-md 
          bg-gray-80 
          p-3 
          transition-all 
          hover:opacity-75"
        cartLength={cartLength}
        icon={<ShoppingBag size={24} />}
      />
    </header>
  )
}
