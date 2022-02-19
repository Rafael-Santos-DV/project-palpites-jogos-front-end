import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: 0;
        outline: none;
        text-decoration: none;
        padding: 0;
        font-family: 'Inconsolata', monospace;
        list-style: none;
    }
    html, body, #root {
        height: 100%;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,23,129,1) 40%, rgba(0,212,255,1) 100%);
    }
`;