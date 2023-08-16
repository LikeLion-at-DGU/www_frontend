import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import leftArrowIcon from "../../image/prev.png";
import rightArrowIcon from "../../image/next.png";

const CustomPrevButton = ({ onClick }) => (
  <div onClick={onClick}>
    <img src={leftArrowIcon} alt="Previous" />
  </div>
);

const CustomNextButton = ({ onClick }) => (
  <div onClick={onClick}>
    <img src={rightArrowIcon} alt="Next" />
  </div>
);

const SwiperDesign = ({}) => {
  return (
    <Swiper
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      pagination={{ clickable: true }}
    ></Swiper>
  );
};

export { SwiperDesign, CustomPrevButton, CustomNextButton };
