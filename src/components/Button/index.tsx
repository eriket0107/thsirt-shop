'use client'
import axios from 'axios'
import { useState } from 'react'
import { ButtonType } from '@/interfaces'

import { CircleNotch } from 'phosphor-react'
import { useCart } from '@/contexts/cartContext'

export function Button({ cart, text, className, action, product }: ButtonType) {
  const { addItem } = useCart()
  const [loadingCheckout, setLoadingCheckout] = useState(false)

  async function handleCart() {
    console.log(cart)

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

  function handleButton() {
    switch (action) {
      case 'checkout':
        handleCart()
        return
      case 'add':
        addItem(product)
    }
  }

  return (
    <button
      className={className}
      onClick={handleButton}
      disabled={loadingCheckout}
    >
      {loadingCheckout ? (
        <>
          Redirecionando...
          <CircleNotch weight="bold" className="animate-spin text-xl" />
        </>
      ) : (
        <>{text}</>
      )}
    </button>
  )
}
