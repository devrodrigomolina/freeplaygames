import styled from "styled-components";

export const CarrosselContainer = styled.div`
  margin-top: 10px;

/*   margin: 10px auto;
  border: 1px solid #78828B;
  border-radius: 5px;
  background-image: url('https://cdn.wallpapersafari.com/43/48/lXHd4x.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
  .swiper {
    width: 100%;
  max-width: 95vw;
  height: 400px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
   /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

`