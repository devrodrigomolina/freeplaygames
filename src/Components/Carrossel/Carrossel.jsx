import React from 'react'
import { CarrosselContainer } from './style'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const Carrossel = () => {

  return (
    <CarrosselContainer>
      <h1 style={{width: '850px',margin: '190px', color: 'white', fontSize: '7rem', letterSpacing: '10px'}}>WELCOME TO <span style={{color: '#FEBF10'}}>FREEPLAY</span> GAMING ZONE.</h1>
{/*       <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {limitData.map(games =>
          <SwiperSlide>
            <img src={games.thumbnail}/>
          </SwiperSlide>
        )}
      </Swiper> */}
    </CarrosselContainer>
  )
}

export default Carrossel
