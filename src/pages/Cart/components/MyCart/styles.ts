import styled from 'styled-components'

export const ItemInMyCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 4rem;
  }
`

export const AboutOrder = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`

export const OrderOption = styled.div`
  display: flex;
  margin-top: 0.5rem;
`

export const RemoveItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.75rem;

  border: none;
  border-radius: 8px;

  margin-left: 0.5rem;
  padding: 0.4rem 0.5rem;

  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme['gray-button']};
`

export const ValueUnic = styled.div`
  margin-left: 3rem;
`
