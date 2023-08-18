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
  console.log("리수투카드", record.record_comments||"없다");
  /*
//여기부터는 임의 데이터입니당 - 현아
const ListCards = () => {
  const record =      "id": 1,
    "record_comments": [
        {
            "id": 1,
            "record": "d",
            "content": "ddd",
            "rcomment_like_count": 0,
            "writer": 1,
            "rcomment_like": []
        },
        {
            "id": 2,
            "record": "d",
            "content": "ddd",
            "rcomment_like_count": 0,
            "writer": 1,
            "rcomment_like": []
        },
        {
            "id": 3,
            "record": "d",
            "content": "hyhhh",
            "rcomment_like_count": 0,
            "writer": 1,
            "rcomment_like": []
        },
        {
            "id": 4,
            "record": "d",
            "content": "ddd",
            "rcomment_like_count": 0,
            "writer": 1,
            "rcomment_like": []
        }
    ],
    "card_photo_1": null,
    "card_photo_2": null,
    "card_photo_3": null,
    "title": "d",
    "weather": "좋다..",
    "date": "2023-08-17",
    "body": "<p>d</p>",
    "created_at": "2023-08-16T16:42:48.027801Z",
    "updated_at": "2023-08-17T09:45:31.731808Z",
    "views": 134,
    "rlike_count": 0,
    "where": "수잔나의앞치마",
    "what": "아메리카노",
    "how": "정말맛있다",
    "tag_field": "#충무로_카페",
    "writer": 1,
    "rlike": [],
    "photos": [],
    "record_scrap": [],
    "tag": [
        1
    ],
    "card_scrap": []
}

  //여기까지 임의 데이터입니당 - 현아
  */

  const navigate = useNavigate();

  return (
    // 내 친구의 record list를 가져와야 함 ...
    <ListCard onClick={() => navigate(`/records/${record.id}`)}>
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
                // .slice(0, 3)
                .map((hashtag, index) => (
                  <HashTag key={index}># {hashtag}</HashTag>
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
        <div dangerouslySetInnerHTML={{ __html: record.body }} />
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
        {/* 글 내의 첫번째 사진
        없을 시 첫번째 카드의 첫번째 카드
        없을 시 기본 로고 이미지 */}
        <Image src={record.card_photo_1} />
      </Img>
    </ListCard>
  );
};

export default ListCards;
