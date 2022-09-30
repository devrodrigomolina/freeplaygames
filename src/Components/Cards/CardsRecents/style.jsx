import styled from "styled-components";

export const CardsContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  border-radius: 5px;
`

export const TitleInfosContainer = styled.div`
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  a {
    color: #3E3E
  }
  `
export const Title = styled.h4`
  display: inline-block;
  color: #ECF6FF;
  `
export const CardsItens = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95vw;
  height: 380px;
  overflow: hidden;
  `
export const Card = styled.div`
  width: 280px;
  height: 320px;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  border: 2px solid rgba( 255, 255, 255, 0.18 );
  text-align: center;
  transition: all .3s;
  &:hover {
    transform: scale(1.03);
  }
  p {
    font-size: 12px;
    margin: 10px 0;
    color: #ffffff81;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;     /* fallback */
    max-height: 32px;      /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
  }
  img {
    width:100%;
  }
  `

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-around;
`
export const IconGenre = styled.div`
  width: 110px;
  height: 30px;
  border: 1px solid #ffffff4b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffffba;
  border-radius: 10px;
  font-size: 12px;
  text-transform: uppercase;
  bottom: 13px;
  left: 16px;
  background-color: #131619;
  `
export const IconPlataform = styled(IconGenre)`
  right: 16px;
  `

  