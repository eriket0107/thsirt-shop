import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ Message: 'Hello' })
}

export async function POST(req: Request) {
  const { cartBody } = await req.json()

  if (!cartBody)
    return NextResponse.json({ Error: 'Price not found', status: 400 })

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutUrl = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: cartBody,
  })
  return NextResponse.json({ checkoutUrl: checkoutUrl.url, status: 201 })
}
