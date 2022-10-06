import React, { useContext } from "react";
import { GamesContext } from "../../../context/GamesContext";
import { ContainerAllGames, CardGame, Title, ContainerFilterArea } from "./styles";
import Input from '../../Input/Input'
import Loading from "../../Loading/Loading";
import IconsPlataform from '../../IconsPlataform/IconsPlataform'

const CardsAllGames = () => {
  const { params, setParams, data, loading } = useContext(GamesContext);

  return (
    <>
      <ContainerFilterArea>
        <Input />
        <p>Plataforma:</p>
        <select value={params.platform} onChange={({ target }) => setParams({ platform: target.value })}>
          <option disabled>Selecione..</option>
          <option value=''>Todos</option>
          <option value='platform=pc'>Windows</option>
          <option value='platform=browser'>Navegador</option>
        </select>
        <p>Gênero:</p>
        <select value={params.genre} onChange={({ target }) => setParams({ genre: target.value})}>
          <option disabled>Selecione..</option>
          <option value='category=mmorpg'>mmorpg</option>
          <option value='category=shooter'>shooter</option>
          <option value='category=strategy'>strategy</option>
          <option value='category=moba'>moba</option>
          <option value='category=racing'>racing</option>
          <option value='category=sports'>sports</option>
          <option value='category=social'>social</option>
        </select>
        <p>Ordenar:</p>
        <select>
          <option disabled>Selecione..</option>
        </select>
      </ContainerFilterArea>
      {loading ? <Loading /> : 
      <ContainerAllGames>
        {data.map((games, index) => (
          <CardGame key={index}>
            <Title>{games.title}</Title>
            <p>{games.short_description}</p>
            <img src={games.thumbnail} />
            <IconsPlataform genre={games.genre} plataform={games.platform} />
          </CardGame>
        ))}
      </ContainerAllGames>
      }
      
    </>
  );
};

export default CardsAllGames;
