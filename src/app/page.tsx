import Stripe from 'stripe'

import { Product } from '@/components/Product'
import { Slider } from '@/components/Slider'
import { stripe } from '@/lib/stripe'
import { Suspense } from 'react'
import LoadingProduct from './loading'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
}

export const revalidate = 60

const getProducts = async (): Promise<Product[]> => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      // @ts-expect-error not null
      price: price.unit_amount / 100,
    }
  })
  return products
}

export default async function Home() {
  const products: Product[] = await getProducts()

  return (
    <main className="min-h-home ml-auto flex w-full max-w-spaceLeft gap-12">
      <Slider>
        <Suspense fallback={<LoadingProduct />}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Suspense>
      </Slider>
    </main>
  )
}
