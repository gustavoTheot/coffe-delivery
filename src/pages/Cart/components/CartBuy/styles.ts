import styled from 'styled-components'

export const CartBuyContainer = styled.div`
  border-radius: 8px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-card']};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  ul {
    li {
      list-style: none;

      &::after {
        content: '';
        display: block;
        margin: 2rem 0;
        border: 1px solid ${(props) => props.theme['gray-button']};
      }
    }
  }
`
