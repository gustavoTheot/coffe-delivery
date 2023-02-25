import { ReactNode } from 'react'
import { ContainerIcon, IconVariant } from './styled'

interface IconProps {
  variant?: IconVariant
  children: ReactNode
}

export function IconContainer({ variant = 'purple', children }: IconProps) {
  return <ContainerIcon variant={variant}>{children}</ContainerIcon>
}
