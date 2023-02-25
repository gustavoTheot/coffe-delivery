import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 5.8rem;
  margin-bottom: 6.75rem;
`

export const TitleMarketing = styled.div`
  width: 36.75rem;

  h1 {
    line-height: 3.9rem;
    font-size: 3rem;

    color: ${(props) => props.theme['gray-title']};

    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.62rem;
    color: ${(props) => props.theme['gray-subtitle']};
  }
`

export const AboutPurchase = styled.div`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;

    margin-top: 4rem;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;

      svg {
        border-radius: 99%;
      }

      list-style: none;
      padding: 0.5rem;
    }
  }
`

export const CupCoffe = styled.div``
