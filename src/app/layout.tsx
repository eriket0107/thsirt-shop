import './globals.css'

import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'
import { Header } from '@/components/Header'

import { CartContextProvider } from '@/contexts/cartContext'

const roboto = Roboto({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ignite Shop ',
  description: 'Market Place to sell Rocketseat tshirts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={roboto.className} lang="en">
      <body className="bg-gray-90 text-gray-10">
        <div className="flex min-h-screen flex-col items-start justify-center">
          <CartContextProvider>
            <Header />
            {children}
          </CartContextProvider>
        </div>
      </body>
    </html>
  )
}
