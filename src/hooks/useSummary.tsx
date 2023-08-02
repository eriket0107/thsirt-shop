import { ProductType } from '@/interfaces'
import { useMemo } from 'react'

export function useSummary(cart: ProductType[]) {
  const amount = useMemo(
    () =>
      cart.reduce(
        (acc, cartItem) => {
          const { price } = cartItem

          acc.totalAmount = price + acc.totalAmount
          return acc
        },
        {
          totalAmount: 0,
        },
      ),
    [cart],
  )

  return amount
}
