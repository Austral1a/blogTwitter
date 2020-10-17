import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.50s linear;
    }
    a,p,h1,h2,h3,h4,h5,h6,div {
        color: ${({ theme }) => theme.text} !important;
    }
    div {
         background: ${({ theme }) => theme.body} !important;
    }
    div.ant-switch-handle {
      background: none !important;
    }
    button {
         background: ${({ theme }) => theme.btnBackground} !important;
    }
`
