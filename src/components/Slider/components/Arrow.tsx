import ArrowIcon from '@/assets/arrowRight.svg'
import { ArrowType } from '@/interfaces'
import Image from 'next/image'

export function Arrow({ isLeft, onClick }: ArrowType) {
  return (
    <div
      className={`
        z-1 
        absolute 
        flex 
        h-full
        w-32 
        flex-1 
        cursor-pointer 
        items-center 
        justify-center 
        bg-gradient-to-r 
        from-transparent 
        to-gray-900
        shadow-md
        ${isLeft ? 'scale-x-[-1]' : 'scale-x-1'}
        ${isLeft ? 'left-0' : 'right-0'}
        opacity-0
        transition-transform
        hover:opacity-100
        hover:transition-all
      `}
      onClick={onClick}
    >
      <Image
        src={ArrowIcon}
        alt={`Seta para ${isLeft ? 'Esquerda' : 'Direita'}`}
        width={48}
        height={48}
      />
    </div>
  )
}
