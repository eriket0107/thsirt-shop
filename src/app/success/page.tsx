import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

export async function getSessionProduct(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  // @ts-expect-error expect null
  const costumerName = session.customer_details.name
  // @ts-expect-error expect null
  const product = session.line_items.data[0].price.product as Stripe.Product

  return {
    costumerName,
    product: {
      name: product.name,
      imageUrl: product.images[0],
    },
  }
}

export default async function Success({
  searchParams,
}: {
  searchParams?: { [key: string]: string }
}) {
  const sessionId = String(searchParams?.session_id)
  const sessionProduct = await getSessionProduct(sessionId)
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mx-auto mb-16 mt-20 text-3xl font-bold text-gray-10">
        Compra efetuada!
      </h1>
      <Image
        src={sessionProduct.product.imageUrl}
        alt={`Imagem de ${sessionProduct.product.name}`}
        width={115}
        height={106}
        className="
          rounded-lg 
          bg-gradient-to-b
          from-green-50
          to-purple-500
          "
      />
      <p className="mt-8 text-center text-2xl text-gray-30">
        Uhuul <strong>{sessionProduct.costumerName}</strong>, sua
        <strong> {sessionProduct.product.name}</strong>
        <br />
        já está a caminho da sua casa.
      </p>
      <Link
        href="/"
        className="
          mt-20 
          text-xl 
          font-bold 
          text-green-50 
          hover:text-green-50/80 
          hover:underline"
      >
        Voltar para página inicial
      </Link>
    </div>
  )
}
