import React from "react";
import { ContainerCards, Card, CardsTexts, ContainerTitle, ContainerGeralCards } from "./style";
import { IoGameController } from "react-icons/io5";

const InfosCards = () => {
  return (
    <ContainerGeralCards>
      <ContainerTitle>
        <p># Bem Vindo ao melhor site de jogos gratis</p>
        <h2>O Melhor site de jogos</h2>
        <h1>Do Planeta</h1>
      </ContainerTitle>
      
      <ContainerCards>
        <Card>
          <CardsTexts>
            <IoGameController className="icon" />
            <h4>JOGOS GRATUITOS</h4>
            <h2>Gaming news</h2>
            <p>Melhores jogos gratuitos para jogar com seus amigos</p>
          </CardsTexts>
        </Card>
        <Card>
          <CardsTexts>
            <IoGameController className="icon" />
            <h4>JOGOS GRATUITOS</h4>
            <h2>Gaming news</h2>
            <p>Melhores jogos gratuitos para jogar com seus amigos</p>
          </CardsTexts>
        </Card>
        <Card>
          <CardsTexts>
            <IoGameController className="icon" />
            <h4>JOGOS GRATUITOS</h4>
            <h2>Gaming news</h2>
            <p>Melhores jogos gratuitos para jogar com seus amigos</p>
          </CardsTexts>
        </Card>
        <Card>
          <CardsTexts>
            <IoGameController className="icon" />
            <h4>JOGOS GRATUITOS</h4>
            <h2>Gaming news</h2>
            <p>Melhores jogos gratuitos para jogar com seus amigos</p>
          </CardsTexts>
        </Card>
      

      </ContainerCards>
    </ContainerGeralCards>
  );
};

export default InfosCards;
