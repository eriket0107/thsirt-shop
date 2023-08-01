'use client'
import { ReactNode, useContext, useState, createContext } from 'react'

import { ProductType } from '@/interfaces'

interface CartContextProps {
  cart: ProductType[]
}

const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cart, useCart] = useState<ProductType[]>([])

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}
