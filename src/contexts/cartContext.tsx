'use client'
import { ReactNode, useContext, useState, createContext } from 'react'

import { ProductType } from '@/interfaces'

interface CartContextProps {
  cart: ProductType[]
  isModalOpen: boolean
  handleOpenModal: () => void
  addItem: (item: ProductType) => void
}

const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductType[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleOpenModal() {
    setIsOpen(!isOpen)
  }

  function addItem(item: ProductType) {
    setCart((prev) => [...prev, item])
  }

  return (
    <CartContext.Provider
      value={{ cart, handleOpenModal, isModalOpen: isOpen, addItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}
