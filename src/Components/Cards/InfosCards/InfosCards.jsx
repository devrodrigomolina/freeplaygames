import React from 'react'
import { ContainerCards, Card, CardsTexts } from './style'
import { IoGameController } from 'react-icons/io5'

const InfosCards = () => {
  return (
    <ContainerCards>
      <Card>
        <CardsTexts>
        <IoGameController className='icon' />
          <h4>JOGOS GRATUITOS</h4>
          <p>Melhores jogos gratuitos para jogar com seus amigos</p>
        </CardsTexts>
      </Card>
      <Card>
        <CardsTexts>
        <IoGameController className='icon' />
          <h4>JOGOS GRATUITOS</h4>
          <p>Melhores jogos gratuitos para jogar com seus amigos</p>
        </CardsTexts>
      </Card>
      <Card>
        <CardsTexts>
        <IoGameController className='icon' />
          <h4>JOGOS GRATUITOS</h4>
          <p>Melhores jogos gratuitos para jogar com seus amigos</p>
        </CardsTexts>
      </Card>

    </ContainerCards>
  )
}

export default InfosCards