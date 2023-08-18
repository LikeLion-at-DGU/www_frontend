// CompanionCards.jsx

import React from "react";
import { CompanionCard, CompanionText, CompanionTitle } from "./CompanionStyle";
import { BtnBox, Content, Image, Img } from "../recordPage/RecordStyle";
import CompanionImg from "../../image/companion.png";
import CountryName from "../../components/index/Country";
import CityName from "../../components/index/CityName";
import DateName from "../../components/index/DateName";
import { WwwBox } from "../mainPage/MainpageStyle";
// import Views from "../../components/index/Views";
// import Comments from "../../components/index/Comments";
// import Like from "../../components/index/Like";
import { useNavigate } from "react-router-dom";
import SmallViews from "../../components/index/smallBtn/SmallViews";
import SmallComments from "../../components/index/smallBtn/SmallComents";
import SmallLike from "../../components/index/smallBtn/SmallLike";

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
          <CountryName result={companion.country} />
          <CityName result={companion.city} />
          <DateName result={companion.date} />
          {/* handleheight="20px" handlefsize="0.8rem" */}
        </WwwBox>
        <Content>
          {/* <p>Let’s play together in Hanoi nightscape festival!</p> */}
          <div
            dangerouslySetInnerHTML={{ __html: companion.body.slice(192, 250) }}
          />
        </Content>
        <BtnBox juscon="space-between">
          <SmallViews
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"4.7px"}
            result={companion}
          />
          <SmallComments
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"4.7px"}
            result={companion}
          />
          <SmallLike
            handlewidth={"43px"}
            handleheight={"18px"}
            handlefsize={"4.7px"}
            result={companion}
          />
        </BtnBox>
      </CompanionText>
    </CompanionCard>
  );
};

export default CompanionCards;
