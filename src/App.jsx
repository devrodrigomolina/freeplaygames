import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import MenuBar from "./Components/MenuBar/MenuBar";
import { GlobalStyle, ContainerPages, MainMiddle } from "./styles/global";
import Home from "./Pages/Home/Home";
import api from "./api/api";
import { useEffect, useState } from "react";
import CardsRecents from "./Components/Cards/CardsRecents/CardsRecents";
import InfosCards from "./Components/Cards/InfosCards/InfosCards";




function App() {
  const [data, setData] = useState([]);

  const getGames = async () => {
    const { data: json } = await api.get(`/games?${"sort-by=release-date"}`);
    setData(json);
  };  
  

  useEffect(() => {
    getGames();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <ContainerPages>
        {/*  <MenuBar /> */}
        <MainMiddle>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <InfosCards />
          <CardsRecents data={data} />
        </MainMiddle>
      </ContainerPages>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
