import React from 'react'
import { Link } from 'react-router-dom'
import { CardsContainer, Title, CardsItens, Card, TitleInfosContainer, GameInfo, ContainerGamesInfos, IconGenre, IconPlataform } from './style'
const CardsGames = ({data}) => {
  const limitData = data.slice(0, 4)

  return (
    <CardsContainer>
      <TitleInfosContainer>
        <Title>Adicionados Recentemente</Title>
        <Link to='/'>Ver mais..</Link>
      </TitleInfosContainer>
      <CardsItens>
        {limitData.map(games =>
          <ContainerGamesInfos>
            <Card>
              <img src={games.thumbnail}/>
              <IconGenre>{games.genre}</IconGenre>
              <IconPlataform>{games.platform}</IconPlataform>
            </Card>
            <GameInfo>
              <Title>{games.title}</Title>
              <p>{games.short_description}</p>
            </GameInfo>
          </ContainerGamesInfos>

        )}
    
      </CardsItens>
    </CardsContainer>
  )
}

export default CardsGames