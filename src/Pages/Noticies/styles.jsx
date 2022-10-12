import styled from "styled-components";

export const ContainerNoticies = styled.div`
  width: 80vw;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 200px;
`
export const CardsNoticies = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #fafafa90;
  cursor: pointer;
  .img_container {
    width: 380px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  `
export const InfosNoticies = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  padding: 10px 0;
  h3 {
    color: #ffa600bc;
    margin-bottom: 20px;
    span {
      color: #fffb00a9;
    }
  }
  p{
    width: 60%;
    color: #f7f5f199;
  }
`