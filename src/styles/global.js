import { createGlobalStyle } from "styled-components";

export const GlobalSyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    display: block;
    width: 100%;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background: #FAFAFA;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;
