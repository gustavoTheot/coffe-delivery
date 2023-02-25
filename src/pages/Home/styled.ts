import styled from 'styled-components'

export const ContainerBuy = styled.div`
  margin-bottom: 9rem;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin-bottom: 3.3rem;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;

    li {
      list-style: none;
    }
  }
`
