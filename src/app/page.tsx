import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

import { ProductType } from '@/interfaces'

import { Product } from '@/components/Product'
import { Slider } from '@/components/Slider'

export const revalidate = 60

const getProducts = async (): Promise<ProductType[]> => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      // @ts-expect-error expect null
      price: price.unit_amount / 100,
      defaultPriceId: price.id,
    }
  })
  return products
}

export default async function Home() {
  const products: ProductType[] = await getProducts()

  return (
    <main className="relative ml-auto flex max-h-screen w-full max-w-spaceLeft gap-12 ">
      <Slider>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Slider>
    </main>
  )
}
