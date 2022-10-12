import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { GlobalStyle, ContainerPages, MainMiddle } from "./styles/global";
import Home from "./Pages/Home/Home";
import Games from "./Pages/Games/Games";
import GamesProvider from "./context/GamesContext";
import Footer from "./Components/Footer/Footer";
import Noticies from "./Pages/Noticies/Noticies";
import Releases from "./Pages/Releases/Releases";

function App() {
  return (
    <BrowserRouter>
      <GamesProvider>
        <Header />
        <ContainerPages>
          <MainMiddle>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/jogos" element={<Games />}></Route>
              <Route path="/lancamentos" element={<Releases />}></Route>
              <Route path="/noticias" element={<Noticies />}></Route>
            </Routes>
            {/* <Footer /> */}
          </MainMiddle>
        </ContainerPages>
        <GlobalStyle />
      </GamesProvider>

    </BrowserRouter>
  );
}

export default App;
