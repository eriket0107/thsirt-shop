'use client'
import Image from 'next/image'

import { ProductType } from '@/interfaces'
import { ButtonText } from '../ButtonText'
import { useCart } from '@/contexts/cartContext'
import { priceFormat } from '@/utils'

export function ProductCard({ product }: { product: ProductType }) {
  const { removeItem } = useCart()

  return (
    <li key={product.id} className="flex gap-5">
      <Image
        src={product.imageUrl}
        width={94}
        height={94}
        alt={`Imagem de ${product.name}`}
        className="
          rounded-lg 
          bg-gradient-to-b 
          from-green-50 
          to-purple-500"
      />
      <div className="flex flex-col justify-between">
        <span className="text-lg text-gray-30">{product.name}</span>
        <span className="text-lg font-bold text-gray-10">
          {priceFormat(product.price)}
        </span>
        <ButtonText
          text="Remover"
          onClick={() => removeItem(product.id)}
          className="
            flex
            text-base 
            font-bold 
            text-green-50 
            transition-all
            hover:text-green-50/80
            "
        />
      </div>
    </li>
  )
}
