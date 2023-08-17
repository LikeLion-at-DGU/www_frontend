// CompanionCards.jsx

import React from "react";
import { CompanionCard, CompanionText, CompanionTitle } from "./CompanionStyle";
import { BtnBox, Content, Image, Img } from "../recordPage/RecordStyle";
import CompanionImg from "../../image/companion.png";
import CountryName from "../../components/index/Country";
import CityName from "../../components/index/CityName";
import DateName from "../../components/index/DateName";
import { WwwBox } from "../mainPage/MainpageStyle";
import Views from "../../components/index/Views";
import Comments from "../../components/index/Comments";
import Like from "../../components/index/Like";
import { useNavigate } from "react-router-dom";

const CompanionCards = ({ companion }) => {
  // const CompanionCards = ({ companion }) => {
  const navigate = useNavigate();
  // const companion = {
  //   id: 1,
  //   body: "dddddddddddjdkdjkdjdlssddkjdsl",
  // };

  return (
    <CompanionCard onClick={() => navigate(`/companions/${companion.id}`)}>
      <CompanionText width="748px" height="124px" padding="10px 20px">
        <CompanionTitle>
          {/* <p>Today Hanoi nightscape!!</p> */}
          <p>{companion.title}</p>
          {/* 현재시간 - 글쓴시간 */}
          <p style={{ color: "#848484", fontSize: "0.8rem" }}>23m ago</p>
        </CompanionTitle>

        <WwwBox>
          {/* <CountryName handleheight="20px" handlefsize="0.8rem" />
          <CityName handleheight="20px" handlefsize="0.8rem" />
          <DateName handleheight="20px" handlefsize="0.8rem" /> */}
        </WwwBox>
        <Content>
          {/* <p>Let’s play together in Hanoi nightscape festival!</p> */}
          <div
            dangerouslySetInnerHTML={{ __html: companion.body.slice(191, 250) }}
          />
        </Content>
        <BtnBox juscon="space-between">
          {/* <Views
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"4.7px"}
          />
          <Comments
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"4.7px"}
          />
          <Like
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"4.7px"}
          /> */}
        </BtnBox>
      </CompanionText>
    </CompanionCard>
  );
};

export default CompanionCards;
