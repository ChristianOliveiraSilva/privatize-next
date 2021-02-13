import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {    
        margin: 0;
        padding: 0;
        font-family: Pridi, serif;
        font-weight: 400;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        color: #B1B1B1;
    }
    
    #root, body {
        background-color: white 
    }
`

export default GlobalStyle
