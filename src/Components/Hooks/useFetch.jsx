import React, { useEffect, useState } from 'react'

const useFetch = (url, type) => {

  const [data, setData] = useState([])

/*   const openDetailGame = async (gameId) => {
    try {
      const { data: json } = await games.get(`/game?id=${gameId}`);
      window.open(json.game_url);
    }catch (err) {
      setError(err.message)
    }
  }; */


  useEffect(async () => {
    const { data: json } = await type.get(url);
    setData(json)
  }, [url])

  return [data]
}

export default useFetch