// import Comments from "../../components/index/Comments";
// import Like from "../../components/index/Like";
// import Views from "../../components/index/Views";

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
  const navigate = useNavigate();

  return (
    <ListCard onClick={() => navigate(`/`)}>
      <Text padding="10px 25px" height="142px" width="980px">
        <ListTitle>
          {/* <p>Unexpected luck!!</p> */}
          <p>{record.title}</p>
          <TagBox padding="0 18px">
            {/* <HashTag>#milano_restaurant</HashTag> */}
            {/* <HashTag>#milano_cafe</HashTag> */}
            {record.hashtags &&
              record.hashtags.map((tag, index) => (
                <HashTag key={index}>#{tag}</HashTag>
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
          {record.content}
        </Content>
        <BtnBox juscon="space-between">
          <Views
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"5.4px"}
          />
          <Comments
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"5.4px"}
          />
          <Like
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"5.4px"}
          />
        </BtnBox>
        <BookMark
          handleposi={"absolute"}
          handletop={"15px"}
          handleright={"15px"}
        />
      </Text>
      <Img width="140px" height="140px">
        {/* <Image src={recordImg} /> */}
        <Image src={record.imageUrl} />
      </Img>
    </ListCard>
  );
};

export default ListCards;
