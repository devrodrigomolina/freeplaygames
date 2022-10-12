import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { games } from "../../../api/api";
import { GamesContext } from "../../../context/GamesContext";
import useFetch from "../../Hooks/useFetch";
import IconsPlataform from "../../IconsPlataform/IconsPlataform";
import {
  CardsContainer,
  Title,
  CardsItens,
  Card,
  TitleInfosContainer,
  ContainerTitle
} from "./style";

const CardsGames = ({cardQtd}) => {
  const { data } = useContext(GamesContext)
  const {openDetailGame} = useFetch(`/game?id=`, games)

  const limitData = data.slice(0, cardQtd); // QUANTIDADE DE ITENS A MOSTRAR

  return (
    <CardsContainer>
      <ContainerTitle>
        <p># Bem Vindo ao melhor site de jogos gratis</p>
        <h2>O Melhor site de jogos</h2>
        <h1>Do Planeta</h1>
      </ContainerTitle>
      <TitleInfosContainer>
        <Title>Adicionados Recentemente</Title>
        <Link to="/jogos">Ver mais..</Link>
      </TitleInfosContainer>
      <CardsItens>
        {limitData.map((games, index) => (
          <Card onClick={() => openDetailGame(games.id)} key={index}>
            <Title>{games.title}</Title>
            <p>{games.short_description}</p>
            <img src={games.thumbnail} />
            <IconsPlataform genre={games.genre} plataform={games.platform}/>
          </Card>
        ))}
      </CardsItens>
    </CardsContainer>
  );
};

export default CardsGames;
