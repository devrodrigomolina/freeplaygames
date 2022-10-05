import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import MenuBar from "./Components/MenuBar/MenuBar";
import { GlobalStyle, ContainerPages, MainMiddle } from "./styles/global";
import Home from "./Pages/Home/Home";
import api from "./api/api";
import { useEffect, useState } from "react";
import CardsRecents from "./Components/Cards/CardsRecents/CardsRecents";
import InfosCards from "./Components/Cards/InfosCards/InfosCards";
import Games from "./Pages/Games/Games";
import GamesProvider from "./context/GamesContext";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <GamesProvider>

        <Header />
        <ContainerPages>
          {/*  <MenuBar /> */}
          <MainMiddle>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/jogos" element={<Games />}></Route>
            </Routes>
          <Footer />
          </MainMiddle>
        </ContainerPages>
        <GlobalStyle />
      </GamesProvider>

    </BrowserRouter>
  );
}

export default App;
