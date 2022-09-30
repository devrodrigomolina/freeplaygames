import styled, { createGlobalStyle } from "styled-components";
import bg_gaming from '../assets/gaming-bg.png'


export const GlobalStyle = createGlobalStyle`

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
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: auto !important;
  }


  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .active {
    background-color: #3E3E;
  }
  `;

export const ContainerPages = styled.div`
  display: flex;
`
export const MainMiddle = styled(ContainerPages)`
  flex-direction: column;
`
