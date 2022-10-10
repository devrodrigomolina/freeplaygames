import React, { useContext, useState } from "react";
import { GamesContext } from "../../../context/GamesContext";
import {
  ContainerAllGames,
  CardGame,
  Title,
  ContainerFilterArea,
} from "./styles";
import Input from "../../Input/Input";
import Loading from "../../Loading/Loading";
import IconsPlataform from "../../IconsPlataform/IconsPlataform";
import { games }from "../../../api/api";
import Error from "../../Error/Error";

const CardsAllGames = () => {
  const {
    plataform,
    setPlataform,
    genere,
    setGenere,
    sort,
    setSort,
    data,
    loading,
    search,
    error,
    setError
  } = useContext(GamesContext);

  const openDetailGame = async (gameId) => {
    try {
      const { data: json } = await games.get(`/game?id=${gameId}`);
      window.open(json.game_url);
    }catch (err) {
      setError(err.message)
    }
  };

  const findTitle = data.filter((test) =>
    test.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ContainerFilterArea>
        <Input />
        <p>Plataforma:</p>
        <select
          value={plataform}
          onChange={({ target }) => setPlataform(target.value)}
        >
          <option disabled>Selecione..</option>
          <option value="">Todos</option>
          <option value="platform=pc">Windows</option>
          <option value="platform=browser">Navegador</option>
        </select>
        <p>Gênero:</p>
        <select
          value={genere}
          onChange={({ target }) => setGenere(target.value)}
        >
          <option disabled>Selecione..</option>
          <option value="">Todos</option>
          <option value="&category=mmorpg">mmorpg</option>
          <option value="&category=shooter">shooter</option>
          <option value="&category=strategy">strategy</option>
          <option value="&category=moba">moba</option>
          <option value="&category=racing">racing</option>
          <option value="&category=sports">sports</option>
          <option value="&category=social">social</option>
        </select>
        <p>Ordenar:</p>
        <select value={sort} onChange={({ target }) => setSort(target.value)}>
          <option disabled>Selecione..</option>
          <option value="sort-by=release-date">Data de lançamento</option>
          <option value="sort-by=popularity">Popularidade</option>
          <option value="sort-by=alphabetical">Ordem alfabética</option>
          <option value="sort-by=relevance">Relevância</option>
        </select>
      </ContainerFilterArea>
      {error != null && <Error error={error}/>}
      {loading ? (
        <Loading />
        ) : (
        <ContainerAllGames>
          {findTitle.map((games, index) => (
            <CardGame key={index} onClick={() => openDetailGame(games.id)}>
              <Title>{games.title}</Title>
              <p>{games.short_description}</p>
              <img src={games.thumbnail} />
              <IconsPlataform genre={games.genre} plataform={games.platform} />
            </CardGame>
          ))}
        </ContainerAllGames>
      )}
    </>
  );
};

export default CardsAllGames;
