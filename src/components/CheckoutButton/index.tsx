'use client'
import axios from 'axios'
import { useState } from 'react'
import { CheckoutButton } from '@/interfaces/checkoutButton'
import { CircleNotch, ShoppingBag } from 'phosphor-react'

export function CheckoutButton({ product }: CheckoutButton) {
  const [loadingCheckout, setLoadingCheckout] = useState(false)
  async function handleBuyProduct() {
    try {
      setLoadingCheckout(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      console.log(err)
      // ferramenta de tracking para capturar erro
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <button
      className="
        flex 
        items-center
        justify-center
        gap-2
        rounded-lg
        bg-green-50 
        px-8 py-5 
        text-lg 
        font-bold 
        hover:opacity-75 
        hover:transition
        disabled:hover:cursor-not-allowed
        disabled:hover:opacity-75
        "
      onClick={() => handleBuyProduct()}
      disabled={loadingCheckout}
    >
      {loadingCheckout ? (
        <>
          Redirecionando...
          <CircleNotch weight="bold" className="animate-spin text-xl" />
        </>
      ) : (
        <>
          Comprar agora
          <ShoppingBag weight="fill" />
        </>
      )}
    </button>
  )
}
