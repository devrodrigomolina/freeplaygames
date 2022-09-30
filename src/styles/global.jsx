import styled, { createGlobalStyle } from "styled-components";
import bg_gaming from '../assets/gaming-bg.png'
import banner from '../assets/hero-1-1.jpg'

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
    background-image: url(${banner});
    background-position: cover;
    background-size: cover;
    background-repeat: no-repeat;
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
