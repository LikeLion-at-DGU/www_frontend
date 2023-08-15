// TodayCards.jsx

import React, { useState } from "react";
import {
  BigImage,
  City,
  HoverOverlay,
  Img,
  ProfileImg,
  TitleBox,
  TodayCard,
  TodayTitle,
  Writer,
} from "./RecordStyle";
import recordImg from "../../image/record2.jpg";
import { useNavigate } from "react-router-dom";

const TodayCards = () => {

  const record = {
    id: "3w_record",
    rcommets_cnt: 20,
    title: "London life",
    weather: "good!",
    body: `The definition of friendships between opposite genders becomes
            somewhat ambiguous depending on how we interpret the term “friend”.
            It is entirely possible to be friends on a casual level, engaging in
            common hobbies, academic pursuits, or daily activities. However, as
            the level of intimacy deepens, it may become increasingly difficult
            to distinguish between platonic feelings and romantic emotions, and`,
    created_at: "2023-08-14",
    updated_at: "2023-08-14",
    views: 113,
    likes: 51,
    writer: "harry.lena",
    tag: ["#서울_맛집2", "#룰루2"],
    photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
  };

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <TodayCard
      onClick={() => navigate(`/record/${record.id}`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Img width="100%" height={isHovered ? "335px" : "262px"}>
        <BigImage
          src={recordImg}
          rightradius={isHovered ? "20px" : ""}
          leftradius={isHovered ? "20px" : ""}
        />
      </Img>
      <TitleBox padding="18px" juscon="space-between" isHovered={isHovered}>
        <TodayTitle>{record.title}</TodayTitle>
        <Writer>
          <p>by</p>
          <ProfileImg></ProfileImg>
          {/* <p>harry.lena</p> */}
          <p>{record.writer}</p>
          <City>England/london</City>
        </Writer>
      </TitleBox>
      <HoverOverlay isHovered={isHovered}>
        <TodayTitle>{record.title}</TodayTitle>
        <Writer>
          <p>by</p>
          <ProfileImg></ProfileImg>
          <p>{record.writer}</p>
          <City>England/london</City>
        </Writer>
        <p>
          {record.body}
          {/* The definition of friendships between opposite genders becomes
            somewhat ambiguous depending on how we interpret the term “friend”.
            It is entirely possible to be friends on a casual level, engaging in
            common hobbies, academic pursuits, or daily activities. However, as
            the level of intimacy deepens, it may become increasingly difficult
            to distinguish between platonic feelings and romantic emotions, and
            ... */}
        </p>
      </HoverOverlay>
    </TodayCard>
  );
};

export default TodayCards;
