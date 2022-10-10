import axios from "axios";

const API_TOKEN_GAMES = 'e3691f142dmshef368499e63936ep1731c9jsn531d9a49f592'
const API_TOKEN_NOTICIES = 'cdc62bef6cmsh2f6f1de753719c5p1a678bjsn4df1b385732a'

export const games = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Key': API_TOKEN_GAMES,
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
})

export const noticies = axios.create({
  baseURL: 'https://videogames-news2.p.rapidapi.com/videogames_news',
  /* params: {query: ''}, */
  headers: {
    'X-RapidAPI-Key': '65e2ffb109msh496018d59227193p112c4fjsnb2c2311953ff',
    'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
  }
});

