import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;

  margin-top: 2.5rem;

  form {
    display: grid;
    grid-template-columns: 40rem 1fr;
    gap: 0.75rem;
  }
`

export const ColumnLocationAndFormPayament = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FullOrderContainer = styled.div`
  h3 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;

    margin-bottom: 1rem;
  }
`

export const CardContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-card']};
`
