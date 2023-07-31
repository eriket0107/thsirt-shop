import { ArrowLeft } from 'phosphor-react'

export function Icon({ type }: { type: string }) {
  return <>{type === 'arrow' && <ArrowLeft />}</>
}
