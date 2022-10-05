import React, { useContext } from "react";
import { GamesContext } from "../../../context/GamesContext";
import { ContainerAllGames, CardGame, Title, ContainerFilterArea } from "./styles";
import Input from '../../Input/Input'
const CardsAllGames = () => {
  const { params, setParams, data } = useContext(GamesContext);

  return (
    <>
      <ContainerFilterArea>
        <Input />
        <p>Plataforma:</p>
        <select value={params} onChange={({ target }) => setParams(target.value)}>
          <option disabled>Selecione..</option>
          <option value=''>Todos</option>
          <option value='platform=pc'>Windows</option>
          <option value='platform=browser'>Navegador</option>
        </select>
        <p>Gênero:</p>
        <select>
          <option disabled>Selecione..</option>
          <option>Selecione..</option>
          <option>Selecione..</option>
        </select>
        <p>Ordenar:</p>
        <select>
          <option disabled>Selecione..</option>
        </select>
      </ContainerFilterArea>
      <ContainerAllGames>
        {data.map((games) => (
          <CardGame>
            <Title>{games.title}</Title>
            <p>{games.short_description}</p>
            <img src={games.thumbnail} />
          </CardGame>
        ))}
      </ContainerAllGames>
    </>
  );
};

export default CardsAllGames;
