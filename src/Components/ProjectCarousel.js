
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "../index.css";


// import Swiper core and required modules
import SwiperCore, {
    EffectCube, Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);

export default function ProjectCarousel() {
  return (
    <>
      <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
        "shadow": true,
        "slideShadows": true,
        "shadowOffset": 20,
        "shadowScale": 0.94
      }} pagination={true} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
     
      </Swiper>
    </>
  );
}