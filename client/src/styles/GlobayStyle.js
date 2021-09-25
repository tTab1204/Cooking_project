import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle` 
    ${reset}
   
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Poppins', sans-serif;
        color: #000;
    }
    input, button {
        border: none;
        outline: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`;
