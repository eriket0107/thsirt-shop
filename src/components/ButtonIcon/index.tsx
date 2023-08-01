import { ButtonIconType } from '@/interfaces/buttonIconType'

export function ButtonIcon({
  icon,
  className,
  cartLength,
  ...rest
}: ButtonIconType) {
  return (
    <button className={className} {...rest}>
      {!!cartLength && (
        <span
          className="
            absolute 
            bottom-9 
            left-8 
            flex 
            h-4 
            w-4 
            items-center 
            justify-center 
            rounded-full 
            bg-green-50 
            p-3
            "
        >
          {cartLength}
        </span>
      )}
      {icon}
    </button>
  )
}
