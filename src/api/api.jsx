import axios from "axios";

const API_TOKEN = 'e3691f142dmshef368499e63936ep1731c9jsn531d9a49f592'

const api = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
  headers: {
    'X-RapidAPI-Key': API_TOKEN,
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
})

export default api