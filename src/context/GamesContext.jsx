import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const GamesContext = createContext()

const GamesProvider = (props) => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState('')

  const getGames = async () => {
    const { data: json } = await api.get(`/games?${params}`);
    setData(json);
  };  
  
  useEffect(() => {
    getGames();
  }, [params])

  return (
    <GamesContext.Provider value={{data, setData, params, setParams}}>
      {props.children}
    </GamesContext.Provider>
  )
}

export default GamesProvider