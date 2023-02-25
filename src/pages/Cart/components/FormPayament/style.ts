import styled from 'styled-components'

export const FormatPayamentContainer = styled.div`
  border-radius: 8px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-card']};
`

export const AboutPayament = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  margin-bottom: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    color: ${(props) => props.theme['gray-subtitle']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-text']};
    padding: 0.125rem 0;
  }
`

export const ButtonsPayament = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
`

export const ButtonPyament = styled.button`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  padding: 1rem 1.18rem;
  font-size: 0.875rem;

  border: none;
  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-button']};

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-hover']};
  }

  &:focus {
    background-color: ${(props) => props.theme['purple-light']};
  }
`
