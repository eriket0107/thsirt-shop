import Image from 'next/image'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'

async function getSessionProduct(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  console.log(session)
  // @ts-expect-error expect null
  const costumerName = session.customer_details.name
  // @ts-expect-error expect null
  const responseProducts = session.line_items.data

  const products = responseProducts.map((item) => {
    const product = item.price?.product as Stripe.Product

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
    }
  })

  return { name: costumerName, products }
}

export default async function Success({
  searchParams,
}: {
  searchParams?: { [key: string]: string }
}) {
  const sessionId = String(searchParams?.session_id)
  const sessionProducts = await getSessionProduct(sessionId)

  const tshirtsQuantity =
    !!sessionProducts.products.length && sessionProducts.products.length
  const tshirtsQuantityText =
    sessionProducts.products.length >= 2 ? 'camisetas' : 'camisa'

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mx-auto mb-16 mt-20 text-3xl font-bold text-gray-10">
        Compra efetuada!
      </h1>
      <ul className="flex pl-[52px]">
        {sessionProducts.products.map((product) => (
          <li
            key={product.id}
            className="ml-[-52px] rounded-full shadow-cartMenu"
          >
            <Image
              src={product.imageUrl}
              alt={`Imagem de ${product.name}`}
              width={130}
              height={130}
              className="
            rounded-full 
            bg-gradient-to-b
            from-green-50
            to-purple-500
            "
            />
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center text-2xl text-gray-30">
        Uhuul <strong>{sessionProducts.name}</strong>, sua compra de{' '}
        {tshirtsQuantity} {tshirtsQuantityText}
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
