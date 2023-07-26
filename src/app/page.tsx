import { Product } from '@/components/Product'
import { Slider } from '@/components/Slider'

export default function Home() {
  return (
    <main className="ml-auto flex min-h-home w-full max-w-spaceLeft gap-12">
      <Slider>
        <Product />
        <Product />
        <Product />
        <Product />
      </Slider>
    </main>
  )
}
