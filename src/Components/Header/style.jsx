import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-right: 30px;
  position: absolute;
  z-index: 999;
  height: 130px;
  a {
    color: white;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 500;
    transition: all .5s;
    &:hover {
      color: rgb(254, 191, 16);
    }
  }
  
  `
export const LinksMenu = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`