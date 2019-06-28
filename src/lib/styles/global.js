import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`

    html {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: #e6e6e6;
      overflow: hidden;
      font-family: 'Titillium Web';
    }
    
    *, *:before, *:after {
      box-sizing: inherit;
    }

    h1, h2, h3 {
      margin: 0;
    }

    a {
      text-decoration: none;
    }

    u {
      text-decoration: underline;
    }

    button, input {
      outline: none;
    }
    
    button {
      border: none;
      background-color: transparent;
      &:hover{
      cursor: pointer;
      }
    }


    .no-overflow {
      overflow: hidden;
    }

    html,
    body,
    body>div:first-child,
    body>div:first-child>div:first-child,
    body>div:first-child>div:first-child>div:first-child {
      height: 100%
    }

  
    ${normalize()}

    b, strong {
      font-weight: 600;
    }

    a {
      transition: color .2s ease-in-out;
    }
  `;

export default GlobalStyle;
