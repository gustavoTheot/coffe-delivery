import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const State = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const Location = styled.div`
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};
  padding: 0.5rem;
  font-size: 0.875rem;

  border-radius: 8px;

  display: inline;
`
