import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100vw;
  max-width: 95vw;

  margin: 10px auto;
  border: 1px solid #78828B;
  border-radius: 5px;
`

export const TitleInfosContainer = styled.div`
  width: 100%;
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
  align-items: center;
  justify-content: space-around;
  width: 95vw;
  overflow: hidden;
`
export const Card = styled.div`
  min-width: 400px;
  height: 250px;
  padding: 10px;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  border-radius: 10px;
  position: relative;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  img {
    width: 100%;
    height: 100%;
  }
`
export const GameInfo = styled.div`
  width: 400px;
  margin: 8px 8px;
  overflow: hidden;
  p {
    max-width: 500px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 10px;
    color: rgba( 255, 255, 255, 0.18 );
  }
`
export const ContainerGamesInfos = styled.div`
  display: flex;
  flex-direction: column;

`
export const IconGenre = styled.div`
  width: 110px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: rgba( 255, 255, 255, 0.18 );
  border-radius: 10px;
  font-size: 12px;
  text-transform: uppercase;
  bottom: 13px;
  left: 16px;
  background-color: #131619;
`
export const IconPlataform = styled(IconGenre)`
  left: unset;
  right: 16px;
`