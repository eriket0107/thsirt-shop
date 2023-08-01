'use client'
import { ReactNode, useContext, useState, createContext } from 'react'

import { ProductType } from '@/interfaces'

interface CartContextProps {
  cart: ProductType[]
  isModalOpen: boolean
  handleOpenModal: () => void
}

const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cart, useCart] = useState<ProductType[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleOpenModal() {
    setIsOpen(!isOpen)
    console.log('isOpen:', isOpen)
  }
  return (
    <CartContext.Provider
      value={{ cart, handleOpenModal, isModalOpen: isOpen }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}
