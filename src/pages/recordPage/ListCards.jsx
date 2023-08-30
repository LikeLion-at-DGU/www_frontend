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
// import Like from "../../components/index/Like";
// import Comments from "../../components/index/Comments";
// import Views from "../../components/index/Views";
import BookMark from "../../components/index/BookMark";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../src/api/axios";
import SmallViews from "../../components/index/smallBtn/SmallViews";
import SmallLike2 from "../../components/index/smallBtn/SmallLike2";
// import SmallComments from "../../components/index/smallBtn/SmallComents";

const ListCards = ({ record }) => {
  const navigate = useNavigate();

  return (
    // 내 친구의 record list를 가져와야 함 ...
    <ListCard onClick={() => navigate(`/records/${record.id}`)}>
      <Text padding="10px 25px" height="142px" width="980px">
        <ListTitle>
          {record.title}
          <TagBox padding="0 18px">
            {record.tag &&
              record.tag
                // .slice(0, 3)
                .map((hashtag, index) => (
                  <HashTag key={index}># {hashtag}</HashTag>
                ))}
          </TagBox>
        </ListTitle>
        <Content fontSize="1rem" style={{width: "850px", height: "50px"}}>
          <div dangerouslySetInnerHTML={{ __html: record.body }} />
          {/* <div dangerouslySetInnerHTML={{ __html: record.body.slice(30, 65) }} /> */}
        </Content>
        <BtnBox juscon="space-between">
          <SmallViews
            result={record}
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"5.4px"}
          />
          {/* <SmallComments2
            result={record}
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"5.4px"}
          /> */}
          <SmallLike2
            result={record}
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
        <Image src={record.card_photo_1} />
      </Img>
    </ListCard>
  );
};

export default ListCards;
