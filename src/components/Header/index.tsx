'use client'
import logo from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'phosphor-react'

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between py-8">
      <Link href={'/'}>
        <Image src={logo} alt="Logo Ignite" />
      </Link>

      <span className="relative cursor-pointer rounded-md bg-gray-80 p-3 transition-all hover:opacity-75">
        <span className="absolute bottom-8 left-8 flex h-4 w-4 items-center justify-center rounded-full bg-green-50 p-3 text-sm">
          1
        </span>
        <ShoppingBag size={24} />
      </span>
    </header>
  )
}
