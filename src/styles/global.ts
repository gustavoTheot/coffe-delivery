import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props) => props.theme['gray-background']};
    }

    body, input, button{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    } 

    h1{
        font-family: 'Baloo 2';
    }

    p{
        color: ${(props) => props.theme['gray-text']}
    }

    
    :focus {
        outline: 1px solid ${(props) => props.theme.purple};
    }
    
    
    button{
        cursor: pointer;
    }
`
