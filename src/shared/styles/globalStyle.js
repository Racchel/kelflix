import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
      font-family: 'Courier New', Courier, monospace;
   }

   p, a {
      font-size: 16px;
      color: inherit;
   }

   h2 {
      font-size: 16px;
   }
`
