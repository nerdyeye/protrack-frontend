import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');
        font-family: 'Sora';
    }
    
`
export default GlobalStyle;