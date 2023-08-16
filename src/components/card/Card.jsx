// Card.jsx

import { Wrapper } from "../WrapStyle";
import { useState, useEffect } from "react";
import TestIMG from "../../image/test.jpg";
import PenIMG from "../../image/pen.png";
import BookMark from "../index/BookMark";
import {
  CardWrapper,
  CardBorder,
  CardWWW,
  ImgCardBorder,
  CardInfo,
  CardText,
  CardImg,
  HashTag,
  PenImg,
  TagName,
} from "./CardStyle";
import axiosInstance from "../../api/axios";

const Card = ({ record }) => {
  // 백에서 받을 카드 데이터 예시
  /*
  const [data, setData] = useState({
    id: 1,
    where: "포케",
    what: "요기는 식당",
    how: "연어 먹쟈!",
    tag: ["#서울_맛집", "#2"],
    images: ["TestIMG1", "TestIMG2", "TestIMG3"],
    record: 1,
  });
  // Card 정보 get 요청
  useEffect(() => {
    axiosInstance
      .get(`/api/records/${record_cards.record}/cards`)
      .then((response) => {
        setData(response.data);
        console.error("카드 데이터 get 성공! :", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  */

  return (
    <CardWrapper>
      <CardBorder>
        <CardWWW>WHERE: &nbsp; </CardWWW>
        <CardText>{record.where}</CardText>
        {/* <CardText>포케 올 데이 잠실점</CardText> */}
      </CardBorder>
      <CardBorder>
        <CardWWW>WHAT: &nbsp; </CardWWW>
        <CardText>{record.what}</CardText>
        {/* <CardText>포케를 먹을 수 있는 식당</CardText> */}
      </CardBorder>
      <CardBorder>
        <CardWWW>HOW(TIPS!): &nbsp; </CardWWW>
        <CardText>{record.how}</CardText>
        {/* <CardText>연어 먹고싶다 리뷰이벤트도 된다 무료로 받으세요</CardText> */}
      </CardBorder>
      <ImgCardBorder>
        <CardImg src={record.card_photo_1} alt="post img1" />
        {record.card_photo_2 && (
          <CardImg src={record.card_photo_2} alt="post img2" />
        )}
        {record.card_photo_3 && (
          <CardImg src={record.card_photo_3} alt="post img3" />
        )}
      </ImgCardBorder>
      <CardInfo>
        <Wrapper>
          <PenImg src={PenIMG} alt="pen" />
          {/* {record.tag.map(tag=>{
          <TagName>{tag}</TagName>
          })} */}
        </Wrapper>
        <BookMark />
      </CardInfo>
    </CardWrapper>
  );
};
export default Card;
