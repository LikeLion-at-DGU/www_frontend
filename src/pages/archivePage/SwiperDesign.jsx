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

const SwiperDesign = () => {
  const [recordList, setRecordList] = useState([
    {
      id: 1,
      rcommets_cnt: 2,
      title: "테스트 Title!",
      weather: "테스트 날씨 !",
      body: "테스트 본문 !",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 13,
      likes: 5,
      writer: "sha",
      tag: ["#서울_맛집", "#룰루"],
      photos: ["testImgURL1", "testImgURL2", "testImgURL3"],
    },
    {
      id: 2,
      rcommets_cnt: 20,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
    ,
    {
      id: 3,
      rcommets_cnt: 20,
      title: "테스트 Title 3!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
    ,
    {
      id: 4,
      rcommets_cnt: 20,
      title: "테스트 Title 4!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
    ,
    {
      id: 5,
      rcommets_cnt: 20,
      title: "테스트 Title 5!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
    ,
    {
      id: 6,
      rcommets_cnt: 20,
      title: "테스트 Title 6!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
  ]);

  return (
    <Swiper
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      pagination={{ clickable: true }}
    >
      {recordList.map((record) => (
        <SwiperSlide key={record.id}>
          {/* Your slide content here */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { SwiperDesign, CustomPrevButton, CustomNextButton };
