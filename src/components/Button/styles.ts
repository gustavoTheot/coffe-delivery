import styled, { css } from 'styled-components'

export type ButtonVariant = 'purple' | 'yellowLight'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  purple: '#8047F8',
  yellowLight: '#F1E9C9',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 0.5rem;
  border: none;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}

  span {
    position: absolute;
    margin-bottom: 2rem;
    margin-left: 2rem;

    width: 1.25rem;
    height: 1.25rem;

    font-size: 0.75rem;
    font-weight: 600;

    border-radius: 100%;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-dark']};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
