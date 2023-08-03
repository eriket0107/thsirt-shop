import { ButtonIconType } from '@/interfaces'

export function ButtonIcon({
  icon: Icon,
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
      <Icon className="h-6 w-6" />
    </button>
  )
}
