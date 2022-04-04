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

   h2, button {
      font-size: 16px;
      font-weight: bold;
   }

   button {
      cursor: pointer;
   }

   button:hover{
      background-color: rgba(0,0,0,0.1);
   }

   a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`
