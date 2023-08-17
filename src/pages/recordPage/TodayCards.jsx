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
        "id": 1,
        "rcomments_cnt": 4,
        "title": "d",
        "weather": "좋다..",
        "date": "2023-08-17",
        "body": "<p>d</p>",
        "created_at": "2023-08-16T16:42:48.027801Z",
        "updated_at": "2023-08-16T22:19:50.805409Z",
        "views": 119,
        "rlike_count": 0,
        "where": "수잔나의앞치마",
        "what": "아메리카노",
        "how": "정말맛있다",
        "tag_field": "#충무로_카페",
        "card_photo_1": null,
        "card_photo_2": null,
        "card_photo_3": null,
        "writer": 1,
        "rlike": [],
        "photos": [],
        "record_scrap": [],
        "tag": [
            1
        ],
        "card_scrap": []
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
      onClick={() => navigate(`/records/${record.id}`)}
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
        <TodayTitle>London life</TodayTitle>
        {/* <TodayTitle>{record.title}</TodayTitle> */}
        <Writer>
          <p>by</p>
          <ProfileImg></ProfileImg>
          {/* <p>harry.lena</p> */}
          <p>{record.writer}</p>
          <City>England/london</City>
        </Writer>
      </TitleBox>
      <HoverOverlay isHovered={isHovered}>
        <TodayTitle>London life</TodayTitle>
        {/* <TodayTitle>{record.title}</TodayTitle> */}
        <Writer>
          <p>by</p>
          <ProfileImg></ProfileImg>
          <p>{record.writer}</p>
          <City>England/london</City>
        </Writer>
        <p>
          <div dangerouslySetInnerHTML={{ __html: record.body }} />
          The definition of friendships between opposite genders becomes
          somewhat ambiguous depending on how we interpret the term “friend”. It
          is entirely possible to be friends on a casual level, engaging in
          common hobbies, academic pursuits, or daily activities. However, as
          the level of intimacy deepens, it may become increasingly difficult to
          distinguish between platonic feelings and romantic emotions, and ...
        </p>
      </HoverOverlay>
    </TodayCard>
  );
};

export default TodayCards;
