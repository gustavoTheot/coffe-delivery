import styled, { css } from 'styled-components'

export type IconVariant = 'purple' | 'yellow' | 'yellowDark' | 'gray'

interface IconContainerProps {
  variant: IconVariant
}

const iconVariants = {
  purple: '#8047F8',
  yellow: '#DBAC2C',
  yellowDark: '#C47F17',
  gray: '#574F4D',
}

const BaseContainerIcons = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 99%;
  background-color: yellow;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerIcon = styled(BaseContainerIcons)<IconContainerProps>`
  color: white;
  ${(props) => {
    return css`
      background-color: ${iconVariants[props.variant]};
    `
  }}
`
