
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import ProjectCard from "../Components/ProjectCard";


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
        <SwiperSlide><ProjectCard/></SwiperSlide>
        <SwiperSlide><Card><Typography>Chat App</Typography></Card></SwiperSlide>
        <SwiperSlide><Card><Typography>Snake</Typography></Card></SwiperSlide>
        <SwiperSlide><Card><Typography>React Expense tracker</Typography></Card></SwiperSlide>
     
      </Swiper>
    </>
  );
}