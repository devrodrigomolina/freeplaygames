import styled from "styled-components";
import banner from '../../assets/hero-1-1.jpg'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 3;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
`
export const Amarelo = styled.div`
  width: 100vw;
  height: 90vh;
  position: relative;
  z-index: 1;
  top: -90px;
  left: -300px;
  -webkit-clip-path: polygon(31% -44%,95% 25%,100% calc(100% - 250px),101% 113%,15% calc(78% - 230px));
  clip-path: polygon(31% -44%,95% 25%,100% calc(100% - 250px),101% 113%,15% calc(78% - 230px));
  
  background-color: yellow;
  transform: skew(70deg);
  
`