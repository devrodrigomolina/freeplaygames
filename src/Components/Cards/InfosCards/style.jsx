import styled from "styled-components";

export const ContainerCards = styled.div`
  width: 100vw;
  max-width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  margin: 0 auto;
  margin-bottom: 100px;
`

export const Card = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
  -webkit-backdrop-filter: blur( 4px );
  backdrop-filter: blur( 4px );
  border-radius: 10px;
  .icon {
    color: white;
    font-size: 3rem;
  }
  h4 {
    color: white;
    margin-top: 20px;
  }
  p {
    color: white;
    
  }
  `

export const CardsTexts = styled.div`
  width: 70%;
  border: 1px solid red;
`