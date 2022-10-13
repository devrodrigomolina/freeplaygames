import styled from "styled-components";
import banner from '../../assets/hero-1-1.jpg'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 3;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
`
export const Amarelo = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  top: 0;
  background-color: yellow;
  clip-path: polygon(0% 0%,100% 0,-570% calc(-219% - 240px),50% 100%,0 calc(105% - 150px))
`