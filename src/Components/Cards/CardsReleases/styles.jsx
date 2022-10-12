import styled from "styled-components";

export const ContainerCardsReleases = styled.div`
  width: 90vw;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`
export const SelectQtdCards = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  p {
    color: white;
    margin-right: 20px;
  }
  select {
    width: 90px;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #3a3838;
    text-align: center;
  }
`
export const ReleasesCards = styled.div`
  width: 300px;
  height: 170px;
  border: 1px solid #fafafa75;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    scale: 1.03;
  }
  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
export const ContainerIconsReleases = styled.div`
  position: absolute;
  bottom: 3px;
  width: 100%
`