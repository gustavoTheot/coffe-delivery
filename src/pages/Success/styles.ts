import styled from 'styled-components'

export const ContainerSuccess = styled.div`
  margin-top: 5rem;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const ContainerDeliveriInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr 30rem;
  justify-content: flex-start;
  align-items: center;
  gap: 6rem;

  img {
    width: 30rem;
  }
`

export const DeliveryInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;
  border-radius: 6px 36px;
  border: 4px solid transparent;
  border: 1px solid;

  border-image-source: linear-gradient(
    102.89deg,
    #dbac2c 2.61%,
    #8047f8 98.76%
  );

  margin-top: 2.5rem;
  margin-bottom: 6.75rem;

  ul {
    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 2rem;
    }
  }
`
