import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
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
    background: #131619;
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