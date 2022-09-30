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
} from "./style";
const CardsGames = ({ data }) => {
  const limitData = data.slice(0, 6); // QUANTIDADE DE ITENS A MOSTRAR

  return (
    <CardsContainer>
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
