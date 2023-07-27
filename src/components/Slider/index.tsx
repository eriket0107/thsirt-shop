'use client'
import { ReactNode, useState } from 'react'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Arrow } from './components/Arrow'

export function Slider({ children }: { children: ReactNode }) {
  const [slidesLength, setSlidesLength] = useState<number>(0)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 2.25,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 1366px)': {
        slides: {
          perView: 2.1,
          spacing: 24,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 1.1,
          spacing: 12,
        },
      },
    },
    slideChanged(slider) {
      // @ts-expect-error not nullable
      setCurrentSlide(instanceRef.current.track.details.abs)
      setSlidesLength(slider.slides.length)
    },
  })
  const maxLength = slidesLength - 2
  return (
    <div ref={sliderRef} className="keen-slider relative z-0 max-h-[600px]">
      {children}
      {currentSlide > 0 && (
        <Arrow isLeft={true} onClick={() => instanceRef.current?.prev()} />
      )}
      {currentSlide !== maxLength && (
        <Arrow isLeft={false} onClick={() => instanceRef.current?.next()} />
      )}
    </div>
  )
}
