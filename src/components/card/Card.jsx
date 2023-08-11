// Card.jsx

import { Wrapper } from "../WrapStyle";
import { useState } from "react";
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

const Card = ([{
  where= "포케",
  what= "요기는 식당",
  how= "연어 먹쟈!",
  tagname= "서울_맛집",
  image= "TestIMG",
}]) => {
  const [tag, setTag] = useState("");
  const tagHandleChange = (e) => {
    setTag(e.target.value);
  };
  return (
    <>
      <CardWrapper>
        <CardBorder>
          <CardWWW>WHERE: &nbsp; </CardWWW>
          <CardText>{where}</CardText>
          {/* <CardText>포케 올 데이 잠실점</CardText> */}
        </CardBorder>
        <CardBorder>
          <CardWWW>WHAT: &nbsp; </CardWWW>
          <CardText>{what}</CardText>
          {/* <CardText>포케를 먹을 수 있는 식당</CardText> */}
        </CardBorder>
        <CardBorder>
          <CardWWW>HOW(TIPS!): &nbsp; </CardWWW>
          <CardText>{how}</CardText>
          {/* <CardText>연어 먹고싶다 리뷰이벤트도 된다 무료로 받으세요</CardText> */}
        </CardBorder>
        <ImgCardBorder>
          <CardImg src={image} alt="post img" />
        </ImgCardBorder>
        <CardInfo>
          <Wrapper>
            <PenImg src={PenIMG} alt="pen" />
            <TagName>{tagname}</TagName>
          </Wrapper>
          <BookMark />
        </CardInfo>
      </CardWrapper>
    </>
  );
};
export default Card;
