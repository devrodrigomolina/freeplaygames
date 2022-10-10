import React, { useContext, useEffect, useState } from "react";
import { ContainerNoticies, CardsNoticies, InfosNoticies } from "./styles";
import { noticies } from "../../api/api";
import { GamesContext } from "../../context/GamesContext";
import Loading from '../../Components/Loading/Loading'

const Noticies = () => {
  const [newsNoticies, setNewsNoticies] = useState([]);
  const {loading, setLoading} = useContext(GamesContext)

  const getNoticies = async () => {
    setLoading(true)
    const { data: json } = await noticies.get("/recent");
    setNewsNoticies(json);
    setLoading(false)
  };

  const openNoticie = (link) => {
    window.open(link)
  }

  useEffect(() => {
    getNoticies();
  }, []);

  return (
    <>
    {loading ? <Loading /> :
    <ContainerNoticies>
      {newsNoticies.map(({ title, date, description, image, link}) => (
        <CardsNoticies onClick={() => openNoticie(link)}>
          <img src={image} alt="" />
          <InfosNoticies>
            <h3>{title} | <span>{date}</span></h3>
            <p>{description}</p>
          </InfosNoticies>
        </CardsNoticies>
      ))}
    </ContainerNoticies>
      }
      </>
  );
};

export default Noticies;
