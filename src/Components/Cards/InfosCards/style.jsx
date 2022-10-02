import styled from "styled-components";
import bg_features from '../../../assets/features-shape.png'

export const ContainerCards = styled.div`
  width: 100vw;
  max-width: 90vw;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-attachment: fixed;
  position: relative;
  top: -150px;
  z-index: -1;
  background-image: url(${bg_features});
  background-color: #1C1C1C;
  `

export const Card = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  .icon {
    font-size: 4rem;
    color: #F1A11A;
  }
  h4 {
    color: #F1A11A;
    margin-top: 10px;
  }
  h2 {
    margin-top: 10px;
    color: white;
  }
  p {
    font-size: 11px;
    margin-top: 15px;
    letter-spacing: 2px;
    color: white;
  }
  `

export const CardsTexts = styled.div`
  width: 100%;
`
export const ContainerGeralCards = styled.div`
  position: relative;
`
export const ContainerTitle = styled.div`
  width: 400px;
  margin-top: 100px;
  margin-left: 120px;
  position: absolute;
  font-family: 'Rajdhani', sans-serif;
  p {
    margin-bottom: 20px;
    color: #F1A11A;
    letter-spacing: 2px;
    font-size: 1.1rem;
  }
  h2{
    color: white;
    font-size: 2.2rem;
  }
  h1{
    color: #F1A11A;
    margin-top: 10px;
    font-size: 2.2rem;
  }
`