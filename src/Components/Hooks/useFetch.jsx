import React, { useEffect, useState } from 'react'

const useFetch = (url, type) => {

  const [data, setData] = useState([])

  const openDetailGame = async (gameId) => {  
    try {
      const { data: json } = await type.get(url + gameId);
      window.open(json.game_url);
    }catch (err) {
      
    }
  };

  return {
    data,
    openDetailGame 
  }
}

export default useFetch