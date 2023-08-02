'use client'
import { ReactNode, useContext, useState, createContext } from 'react'

import { ProductType } from '@/interfaces'

interface CartContextProps {
  cart: ProductType[]
  isCartOpen: boolean
  onOpenCart: () => void
  addItem: (item: ProductType) => void
  removeItem: (item: string) => void
}

const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductType[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function onOpenCart() {
    setIsOpen(!isOpen)
  }

  function addItem(item: ProductType) {
    setCart((prev) => [...prev, item])
  }

  function removeItem(itemId: string) {
    const filteredCart = cart.filter((product) => product.id !== itemId)
    setCart([...filteredCart])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen: isOpen,
        onOpenCart,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}
