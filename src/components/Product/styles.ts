import styled from 'styled-components'

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 1.25rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-card']};

  h3 {
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
    border-radius: 8px;

    color: ${(props) => props.theme.yellow};
    background-color: ${(props) => props.theme['yellow-light']};
  }
`

export const DescriptionProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.25rem;

    margin-bottom: 0.5rem;

    color: ${(props) => props.theme['gray-subtitle']};
  }

  p {
    width: 13.5rem;

    font-size: 0.875rem;
    line-height: 1.138rem;
    text-align: center;

    color: ${(props) => props.theme['gray-label']};
  }
`

export const ValueProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 13.5rem;
  margin-top: 2rem;

  button {
    padding: 0.5rem;
    border: none;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.purple};
  }
`

export const Value = styled.span`
  color: #574f4d;
  font-size: 0.875rem;
  strong {
    font-size: 1.5rem;
  }
`

export const ContainerAddProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.4rem;

  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-button']};

  input {
    width: 1rem;
    text-align: center;

    padding: 0.5rem 0.25rem;
    border: none;
    background-color: transparent;

    -moz-appearance: textfield;
    appearance: textfield;

    outline: none;
    color: ${(props) => props.theme.purple};
  }

  button {
    display: flex;
    align-items: center;

    padding: 0.4rem 0.4rem;

    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.purple};
  }
`
