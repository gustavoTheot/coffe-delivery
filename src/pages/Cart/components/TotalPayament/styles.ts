import styled from 'styled-components'

export const TotalPayamentContainer = styled.div`
  button {
    width: 100%;
    font-size: 0.875rem;

    border: none;
    border-radius: 8px;

    padding: 0.75rem 0;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.yellow};
  }
`

export const InformAboutValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: ${(props) => props.theme['gray-text']};

  p {
    font-size: 0.75rem;
  }
`
