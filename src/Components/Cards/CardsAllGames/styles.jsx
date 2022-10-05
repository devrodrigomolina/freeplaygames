import styled from "styled-components";

export const ContainerAllGames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  flex-wrap: wrap;
  margin: 0 auto;
`
export const ContainerFilterArea = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  p {
    color: white;
    margin: 20px;
  }
  select {
    height: 30px;
  }
`

export const CardGame = styled.div`
 width: 280px;
  height: 320px;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  border: 2px solid rgba( 255, 255, 255, 0.18 );
  text-align: center;
  transition: all .3s;
  &:hover {
    transform: scale(1.03);
  }
  p {
    font-size: 12px;
    margin: 10px 0;
    color: #ffffff81;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;     /* fallback */
    max-height: 32px;      /* fallback */
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
  }
  img {
    width:100%;
  }
`
export const Title = styled.h2`
  color: white;
  text-align: center;
`