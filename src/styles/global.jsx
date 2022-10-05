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
    /* font-family: 'Montserrat', sans-serif; */
    overflow-x: hidden;
    background-color: #1C1C1C;
    font-family: 'Rajdhani', sans-serif;
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
  margin: 0 auto;
`
export const MainMiddle = styled(ContainerPages)`
  flex-direction: column;
`
