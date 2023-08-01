'use client'
import axios from 'axios'
import { useState } from 'react'
import { ButtonType } from '@/interfaces'

import { CheckCircle, CircleNotch } from 'phosphor-react'
import { useCart } from '@/contexts/cartContext'

export function Button({
  cart: cartProducts,
  text,
  className,
  action,
  product,
}: ButtonType) {
  const { cart, addItem } = useCart()
  const [loadingCheckout, setLoadingCheckout] = useState(false)

  const productInCart = cart?.some((item) => product?.id === item.id)

  async function handleCart() {
    console.log(cart)
    setLoadingCheckout(true)

    // try {
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

  function handleAddProduct() {
    if (!product) return alert('Erro ao adicionar produto.')
    if (productInCart) return alert('Estre item já existe no carrinho.')
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

  return (
    <button
      className={className}
      onClick={handleButton}
      disabled={loadingCheckout || productInCart}
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
