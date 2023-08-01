'use client'

import { useCart } from '@/contexts/cartContext'
import { ButtonIcon } from '../ButtonIcon'
import { X, ShoppingBagOpen } from 'phosphor-react'
import { CheckoutButton } from '../CheckoutButton'

export function Cart() {
  const { handleOpenModal, isModalOpen, cart } = useCart()

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
        {isModalOpen && (
          <>
            <ButtonIcon
              icon={<X size={24} className="hover:scale-110" />}
              className="absolute right-0 top-0 p-6"
              onClick={() => handleOpenModal()}
            />
            <main className="relative flex h-full flex-col justify-between p-12">
              <div className="h-full">
                <h2 className="mb-8 mt-6 text-xl font-bold text-gray-10">
                  Sacola de compras
                </h2>
                {cart.length ? (
                  <div>
                    {cart.map((product) => (
                      <div key={product.id}>{product.name}</div>
                    ))}
                  </div>
                ) : (
                  <div
                    className="
                      flex 
                      h-3/5
                      items-center 
                      justify-center 
                      gap-2 
                      rounded-lg 
                      bg-gray-80
                      shadow-xl
                      "
                  >
                    <span className="text-xl text-gray-10/25">
                      Sacola vazia
                    </span>
                    <ShoppingBagOpen className="text-xl text-gray-10/25" />
                  </div>
                )}
              </div>
              <div className="w-full items-end">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-base text-gray-10">
                    <span>Quatidade</span>
                    <span>3 itens</span>
                  </div>
                  <div className="mb-14 flex justify-between font-bold text-gray-10">
                    <span className="text-lg">Valor total</span>
                    <span className="text-2xl">R$ 270,00</span>
                  </div>
                </div>
                <CheckoutButton cart={cart} />
              </div>
            </main>
          </>
        )}
      </div>
    </>
  )
}
