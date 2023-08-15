import React from "react";
import { Companions as CompanionsStyle, SlideContainer } from "./ArchiveStyle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Companions = ({ onClick }) => {
  return <CompanionsStyle onClick={onClick}>Companions</CompanionsStyle>;
};

export default Companions;
