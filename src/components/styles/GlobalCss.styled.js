import { createGlobalStyle } from 'styled-components'

const GlobalStyle =  createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin-top: 0;
        margin: 0;  
        padding: 0; 
    }
    
    root,
    html {
        font-size: 16px;
      }
    
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`
export default GlobalStyle