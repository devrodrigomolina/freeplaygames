import React from 'react'
import CardsAllGames from '../../Components/Cards/CardsAllGames/CardsAllGames'
import { ContainerCardGames } from './styles'

const Games = () => {
  /* const { data } = useContext(GamesContext) */

  return (
    <ContainerCardGames>
      <CardsAllGames />
    </ContainerCardGames>
  )
}

export default Games