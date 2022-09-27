import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import MenuBar from './Components/MenuBar/MenuBar';
import { GlobalStyle, ContainerPages } from './styles/global'
import Home from './Pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ContainerPages>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </ContainerPages>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;