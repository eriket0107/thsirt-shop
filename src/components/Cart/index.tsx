'use client'

import { useCart } from '@/contexts/cartContext'
import { ButtonIcon } from '../ButtonIcon'
import { X } from 'phosphor-react'
import { CheckoutButton } from '../CheckoutButton'

export function Cart() {
  const { handleOpenModal, isModalOpen } = useCart()

  return (
    <>
      <div
        className={`
          max-w-[900]px 
          absolute
          right-0 
          top-0 
          h-screen 
          bg-gray-80
          shadow-cartMenu
          transition-all
          ${isModalOpen ? 'w-1/4' : '0'}
          ${isModalOpen ? 'opacity-100' : 'opacity-0'}
    `}
      >
        <div className="relative">
          <ButtonIcon
            icon={<X size={24} className=" hover:scale-110" />}
            className="absolute right-0 p-6"
            onClick={() => handleOpenModal()}
          />
        </div>
      </div>
    </>
  )
}
