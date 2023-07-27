import Image from 'next/image'
import Link from 'next/link'

import { priceFormat } from '@/functions/helpers/priceFormat'
import { ProductType } from '@/interfaces'

export function Product({ product }: { product: ProductType }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="
      keen-slider__slide 
      group  
      relative 
      flex 
      items-center 
      justify-center 
      overflow-hidden 
      rounded-lg 
      bg-gradient-to-b 
      from-green-50 
      to-purple-500
      p-1
      "
    >
      <Image
        className="object-cover"
        src={product.imageUrl}
        alt={`Imagem de ${product.name}`}
        width={520}
        height={480}
      />
      <footer
        className="
        absolute 
        bottom-1 
        left-1 
        right-1 
        flex 
        translate-y-28 
        items-center 
        justify-between 
        rounded-md 
        bg-gray-80/60 
        p-8
        opacity-0
        transition-transform
        group-hover:translate-y-0 
        group-hover:opacity-100
        group-hover:transition-all
        "
      >
        <strong className="text-xl">{product.name}</strong>
        <span className="text-xl text-green-30">
          {priceFormat(product.price)}
        </span>
      </footer>
    </Link>
  )
}
