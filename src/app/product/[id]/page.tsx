import Stripe from 'stripe'

import Image from 'next/image'

import { stripe } from '@/lib/stripe'
import { priceFormat } from '@/utils'

import { ProductType } from '@/interfaces'

import { Button } from '@/components/Button'
import { ButtonText } from '@/components/ButtonText'

interface ProductsPageProps {
  params: {
    id: string
  }
}
export const revalidate = 60 * 60 * 1

export const generateStaticParams = async () => {
  return [
    {
      id: 'prod_OKsyaRI8AYm5bN',
    },
  ]
}

const getProduct = async (productId: string): Promise<ProductType> => {
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  const price = product.default_price as Stripe.Price

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    // @ts-expect-error not null
    price: priceFormat(price.unit_amount / 100),
    description: product.description || '',
    defaultPriceId: price.id,
  }
}
export default async function ProductPage({ params }: ProductsPageProps) {
  const product = await getProduct(params.id)

  return (
    <main className="mx-auto flex gap-20">
      <Image
        src={product.imageUrl}
        alt={`imagem de ${product.name}`}
        width={520}
        height={480}
        className="
          rounded-lg 
          bg-gradient-to-b 
          from-green-50 
          to-purple-500
          object-cover
        "
      />
      <div className="flex flex-col justify-between">
        <div>
          <div className="mb-10 flex flex-col gap-4">
            <h1 className="text-3xl text-gray-30">{product.name}</h1>
            <span className="text-3xl text-green-30">{product.price}</span>
          </div>
          <p className="max-w-[520px]">{product.description}</p>
        </div>
        <div className="flex flex-col">
          <ButtonText
            icon="arrow"
            text="Voltar"
            href="/"
            className="
              my-4 
              flex 
              flex-row 
              items-center 
              gap-1 
              text-green-50 
              hover:underline 
              hover:opacity-75 
              hover:transition
            "
          />
          <Button
            text="Colocar na sacola"
            action="add"
            product={product}
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
              disabled:hover:opacity-75"
          />
        </div>
      </div>
    </main>
  )
}
