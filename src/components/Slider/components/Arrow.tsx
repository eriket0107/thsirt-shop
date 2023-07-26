import ArrowIcon from '@/assets/arrowRight.svg'
import Image from 'next/image'

interface ArrowProps {
  isLeft: boolean
  onClick: () => void
}

export function Arrow({ isLeft, onClick }: ArrowProps) {
  return (
    <div
      className={`
      z-1 
      absolute 
      flex 
      h-full
      w-32 
      flex-1 
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
