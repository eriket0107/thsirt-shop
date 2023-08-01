'use client'
import axios from 'axios'
import { useState } from 'react'
import { CheckoutButton } from '@/interfaces'

import { CircleNotch } from 'phosphor-react'

export function CheckoutButton({ cart }: CheckoutButton) {
  const [loadingCheckout, setLoadingCheckout] = useState(false)

  async function handleCart() {
    // try {
    //   setLoadingCheckout(true)
    //   const response = await axios.post('/api/checkout', {
    //     priceId: product.defaultPriceId,
    //   })
    //   const { checkoutUrl } = response.data
    //   window.location.href = checkoutUrl
    // } catch (err) {
    //   console.log(err)
    //   // ferramenta de tracking para capturar erro
    //   alert('Falha ao redirecionar ao checkout')
    // }
  }

  return (
    <button
      className="
        flex 
        w-full
        items-center
        justify-center
        gap-2
        rounded-lg 
        bg-green-50 px-8 
        py-5 
        text-lg 
        font-bold 
        hover:opacity-75
        hover:transition
        disabled:hover:cursor-not-allowed
        disabled:hover:opacity-75
        "
      onClick={handleCart}
      disabled={loadingCheckout}
    >
      {loadingCheckout ? (
        <>
          Redirecionando...
          <CircleNotch weight="bold" className="animate-spin text-xl" />
        </>
      ) : (
        <>
          Finalizar compra
          {/* <ShoppingBag weight="fill" /> */}
        </>
      )}
    </button>
  )
}
