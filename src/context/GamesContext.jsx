import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

export const GamesContext = createContext();

const GamesProvider = (props) => {
  const [data, setData] = useState([]);
  const [plataform, setPlataform] = useState("");
  const [genere, setGenere] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getGames = async () => {
    setLoading(true);
    const { data: json } = await api.get(`/games?${sort}${plataform}${genere}`);
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    getGames();
  }, [plataform, genere, sort]);

  return (
    <GamesContext.Provider
      value={{
        data,
        setData,
        plataform,
        setPlataform,
        genere,
        setGenere,
        sort,
        setSort,
        search,
        setSearch,
        loading,
      }}
    >
      {props.children}
    </GamesContext.Provider>
  );
};

export default GamesProvider;
