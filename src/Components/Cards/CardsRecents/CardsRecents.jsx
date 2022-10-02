import React from "react";
import { Link } from "react-router-dom";
import {
  CardsContainer,
  Title,
  CardsItens,
  Card,
  TitleInfosContainer,
  IconGenre,
  IconPlataform,
  ContainerIcons,
  ContainerTitle
} from "./style";
const CardsGames = ({ data }) => {
  const limitData = data.slice(0, 6); // QUANTIDADE DE ITENS A MOSTRAR

  return (
    <CardsContainer>


      <ContainerTitle>
        <p># Bem Vindo ao melhor site de jogos gratis</p>
        <h2>O Melhor site de jogos</h2>
        <h1>Do Planeta</h1>
      </ContainerTitle>



      <TitleInfosContainer>
        <Title>Adicionados Recentemente</Title>
        <Link to="/">Ver mais..</Link>
      </TitleInfosContainer>
      <CardsItens>
        {limitData.map((games) => (
          <Card>
            <Title>{games.title}</Title>
            <p>{games.short_description}</p>
            <img src={games.thumbnail} />
            <ContainerIcons>
              <IconGenre>{games.genre}</IconGenre>
              <IconPlataform>{games.platform}</IconPlataform>
            </ContainerIcons>
          </Card>
        ))}
      </CardsItens>
    </CardsContainer>
  );
};

export default CardsGames;
