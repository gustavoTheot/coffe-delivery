import styled from 'styled-components'

export const LocationContainer = styled.div`
  h3 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;

    margin-bottom: 1rem;
  }
`

export const FalseFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-card']};

  padding: 2.5rem;

  input {
    padding: 0.75rem;

    color: ${(props) => props.theme['gray-label']};
    background-color: ${(props) => props.theme['gray-input']};

    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['gray-button']};

    ::placeholder {
      color: ${(props) => props.theme['gray-label']};
    }

    &:first-of-type {
      width: 12.5rem;
    }
  }
`

export const AboutForm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
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

export const NumberAndComplement = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: 1rem;
`

export const DistrictAndCity = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr 3.75rem;
  gap: 1rem;
`
