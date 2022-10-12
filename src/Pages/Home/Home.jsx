import React, { useContext } from 'react'
import Carrossel from '../../Components/Carrossel/Carrossel'
import { HomeContainer, Amarelo } from './style'
import InfosCards from '../../Components/Cards/InfosCards/InfosCards'
import CardsRecents from '../../Components/Cards/CardsRecents/CardsRecents'

const Home = () => {

  return (
    <>
      <HomeContainer>
        <Amarelo/>
        <Carrossel />
      </HomeContainer>
      <InfosCards />
      <CardsRecents cardQtd={6} />
    </>
  )
}

export default Home