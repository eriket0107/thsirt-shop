import logo from '@/assets/logo.svg'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mx-auto w-full max-w-6xl py-8">
      <Image src={logo} alt="Logo Ignite" />
    </header>
  )
}
