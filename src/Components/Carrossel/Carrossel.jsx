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
      <h1>WELCOME TO <span style={{color: '#FEBF10'}}>FREEPLAY</span> GAMING ZONE.</h1>
    </CarrosselContainer>
  )
}

export default Carrossel
