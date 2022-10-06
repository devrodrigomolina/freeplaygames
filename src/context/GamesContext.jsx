import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

export const GamesContext = createContext()

const GamesProvider = (props) => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    platform: '',
    genre: ''
  })
  const [loading, setLoading] = useState(false)

  const getGames = async () => {
    setLoading(true)
    const { data: json } = await api.get(`/games?${params.platform}`);
    setData(json);
    setLoading(false)
  };  
  
  useEffect(() => {
    console.log(params)
    getGames();
  }, [params])

  return (
    <GamesContext.Provider value={{data, setData, params, setParams, loading}}>
      {props.children}
    </GamesContext.Provider>
  )
}

export default GamesProvider