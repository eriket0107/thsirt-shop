'use client'
import { useState } from 'react'

import axios from 'axios'

import { ButtonType } from '@/interfaces'
import { useCart } from '@/contexts/cartContext'

import { CheckCircle, CircleNotch } from 'phosphor-react'

export function Button({ text, className, action, product }: ButtonType) {
  const { cart, addItem } = useCart()
  const [loadingCheckout, setLoadingCheckout] = useState(false)

  const productInCart = cart?.some((item) => product?.id === item.id)

  async function handleCart() {
    setLoadingCheckout(true)
    const cartBody = cart.map((item) => {
      return {
        price: item.defaultPriceId,
        quantity: 1,
      }
    })
    try {
      const response = await axios.post('/api/checkout', {
        cartBody,
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      console.log(err)
      // ferramenta de tracking para capturar erro
      alert('Falha ao redirecionar ao checkout')
    }
  }

  function handleAddProduct() {
    if (!product) return alert('Erro ao adicionar produto.')
    if (productInCart) return alert('Este item já existe no carrinho.')
    setLoadingCheckout(true)
    addItem(product)
  }

  function handleButton() {
    switch (action) {
      case 'checkout':
        handleCart()
        return
      case 'add':
        handleAddProduct()
    }
  }

  const checkoutActionEnabled = action === 'checkout' && !cart.length

  return (
    <button
      className={className}
      onClick={handleButton}
      disabled={loadingCheckout || productInCart || checkoutActionEnabled}
    >
      {loadingCheckout ? (
        <>
          {action === 'checkout' ? (
            <span className="flex items-center gap-2">
              Redirecionando...
              <CircleNotch weight="bold" className="animate-spin text-xl" />
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Adicionado
              <CheckCircle weight="bold" />
            </span>
          )}
        </>
      ) : (
        <>
          {productInCart ? (
            <span className="flex items-center gap-2">
              Adicionado
              <CheckCircle weight="bold" />
            </span>
          ) : (
            <>{text}</>
          )}
        </>
      )}
    </button>
  )
}
