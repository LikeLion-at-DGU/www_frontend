// ListCards.jsx

import React, { useState, useEffect } from "react";

import {
  BtnBox,
  Content,
  HashTag,
  Image,
  Img,
  ListCard,
  ListTitle,
  TagBox,
  Text,
} from "./RecordStyle";
import recordImg from "../../image/record1.jpg";
import Like from "../../components/index/Like";
import Comments from "../../components/index/Comments";
import Views from "../../components/index/Views";
import BookMark from "../../components/index/BookMark";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../src/api/axios";

const ListCards = ({ record }) => {
  /*
//여기부터는 임의 데이터입니당 - 현아
const ListCards = () => {
  const record = {
    id: 1,
    rcommets_cnt: 2,
    title: "테스트 Title ListCard!",
    weather: "테스트 날씨 !",
    body: "테스트 본문 !",
    created_at: "2023-08-14",
    updated_at: "2023-08-14",
    views: 13,
    likes: 5,
    writer: "sha",
    tag: ["#서울_맛집", "#룰루"],
    photos: ["testImgURL1", "testImgURL2", "testImgURL3"],
  };
  //여기까지 임의 데이터입니당 - 현아
  */

  const navigate = useNavigate();

  return (
    // 내 친구의 record list를 가져와야 함 ...
    <ListCard onClick={() => navigate(`/record/${record.id}`)}>
      <Text padding="10px 25px" height="142px" width="980px">
        <ListTitle>
          {/* <p>Unexpected luck!!</p> */}
          {/* 최대 몇자? */}
          <p>{record.title}</p>
          <TagBox padding="0 18px">
            {/* <HashTag>#milano_restaurant</HashTag> */}
            {/* <HashTag>#milano_cafe</HashTag> */}
            {record.tag &&
              record.tag
                .slice(0, 3)
                .map((hashtag, index) => (
                  <HashTag key={index}>#{hashtag}</HashTag>
                ))}
          </TagBox>
        </ListTitle>
        <Content fontSize="1rem">
          {/* The definition of friendships between opposite genders becomes
            somewhat ambiguous
            <br />
            depending on how we interpret the term “friend”. <br />
            It is entirely possible to be friends on a casual level, engaging in
            common hobbies... */}
          {/* 최대 몇자? */}
          {record.body}
        </Content>
        <BtnBox juscon="space-between">
          <Views
            record={record}
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"5.4px"}
          />
          <Comments
            record={record}
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"5.4px"}
          />
          <Like
            record={record}
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"5.4px"}
          />
        </BtnBox>
        <BookMark
          record={record}
          handleposi={"absolute"}
          handletop={"15px"}
          handleright={"15px"}
        />
      </Text>
      <Img width="140px" height="140px">
        {/* <Image src={recordImg} /> */}
        {/* 글 내의 첫번째 사진
        없을 시 첫번째 카드의 첫번째 카드
        없을 시 기본 로고 이미지 */}
        <Image src={record.photos} />
      </Img>
    </ListCard>
  );
};

export default ListCards;
