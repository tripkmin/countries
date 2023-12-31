import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { size, timer } from './constants';

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
      text-decoration: none;
      color: inherit;
    }
    *{
      box-sizing: border-box;
      font-family: 'roboto slab', sans-serif;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table, input, textarea{
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 16px;
      font-family: 'roboto slab';
      vertical-align: baseline;
    }
    body{
      min-height: 100vh;
      scrollbar-color: #e5e5e0 #7e7e7c;

      &::-webkit-scrollbar {
        width: 10px;
      }

      &::-webkit-scrollbar-track {
        background: #e5e5e0;
      }

      &::-webkit-scrollbar-thumb {
        background: #7e7e7c;
      }
    }

    ol, ul{
      list-style: none;
    }
    button {
      font-size: 16px;
      border: 0;
      background: transparent;
      cursor: pointer;
    }
    p, span, textarea {
        line-height: 180%;
    }
    strong {
      font-weight: 700;
    }
    h1 {
      font-size: 3rem;
      font-weight: 700;
    }
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
    }
    h3 {
      font-size: 2rem;
      font-weight: 500;
    }
    h4 {
        font-size: 1.5rem;
        font-weight: 500;
    }
    h5 {
      font-size: 1rem;
      font-weight: 500;
    }
    h6 {
      font-size: 0.8rem;
      font-weight: 500;
    }

    // Hide the button that appears when the input type is numeric 
    // for Chrome, Safari, Edge, Opera
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    // for Firefox
    input[type=number] {
    -moz-appearance: textfield;
    }

    input&:focus,
    textarea&:focus{
      outline: none;
    }
    
    #root {
      min-height: 100vh;
      background-color: ${props => props.theme.background.primary};
      transition: background-color ${timer.default};

      @media screen and (max-width: ${size.desktop}) {
        padding: 0 10px;  
      }
    }
`;

export default GlobalStyles;
