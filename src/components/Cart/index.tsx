'use client'

import { useCart } from '@/contexts/cartContext'

import { Button } from '../Button'
import { ButtonIcon } from '../ButtonIcon'
import { ProductCard } from '../ProductCard'

import { X, ShoppingBagOpen } from 'phosphor-react'
import { useSummary } from '@/hooks'
import { priceFormat } from '@/utils'

export function Cart() {
  const { onOpenCart, isCartOpen, cart } = useCart()

  const summary = useSummary(cart)

  const cartQuantity = !!cart.length && cart.length
  const cartQuantityText =
    cart.length >= 2 ? 'Itens' : cart.length === 0 ? 'Nenhum Item' : 'Item'

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
          ${isCartOpen ? 'w-1/4' : '0'}
          ${isCartOpen ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {isCartOpen && (
          <main className="relative flex h-full flex-col justify-between p-12">
            <ButtonIcon
              icon={X}
              className="absolute right-0 top-0 p-6 hover:scale-90"
              onClick={() => onOpenCart()}
            />
            <div className="h-full">
              <h2 className="mb-8 mt-6 text-xl font-bold text-gray-10">
                Sacola de compras
              </h2>
              {cart.length ? (
                <ul className="flex flex-col gap-6">
                  {cart.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </ul>
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
                  <span className="text-xl text-gray-10/25">Sacola vazia</span>
                  <ShoppingBagOpen className="text-xl text-gray-10/25" />
                </div>
              )}
            </div>
            <div className="w-full items-end">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-base text-gray-10">
                  <span>Quatidade</span>
                  <span>
                    {cartQuantity} {cartQuantityText}
                  </span>
                </div>
                <div className="mb-14 flex justify-between font-bold text-gray-10">
                  <span className="text-lg">Valor total</span>
                  <span className="text-2xl">
                    {priceFormat(summary.totalAmount)}
                  </span>
                </div>
              </div>
              <Button
                action="checkout"
                text="Finalizar compra"
                className="
                  flex 
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg 
                  bg-green-50 
                  px-8 
                  py-5
                  text-lg 
                  font-bold 
                  hover:opacity-75
                  hover:transition
                  disabled:hover:cursor-not-allowed
                  disabled:hover:opacity-75"
              />
            </div>
          </main>
        )}
      </div>
    </>
  )
}
