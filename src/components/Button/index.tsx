import { ChangeEvent, ReactNode } from 'react'
import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps {
  variant?: ButtonVariant
  children: ReactNode
  addToCart: (event: ChangeEvent<ButtonProps>) => void
}

export function BuyButton({
  variant = 'purple',
  children,
  addToCart,
}: ButtonProps) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>
}
