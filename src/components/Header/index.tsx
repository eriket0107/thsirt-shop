import logo from '@/assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mx-auto w-full max-w-6xl py-8">
      <Link href={'/'}>
        <Image src={logo} alt="Logo Ignite" />
      </Link>
    </header>
  )
}
