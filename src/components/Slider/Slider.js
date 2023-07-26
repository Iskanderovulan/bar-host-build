import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL } from '../../config';

// Import Swiper styles
import "swiper/css";



export default function Slider({ ingredients }) {
    const renderSlides = ingredients?.map((el, index) => (
        <SwiperSlide key={index}>
            <img src={`${IMG_URL}${el}.png`} />
        </SwiperSlide>
    ))
    return (
        <>
            <Swiper className="mySwiper">
                {renderSlides}
            </Swiper>
        </>
    );
}
