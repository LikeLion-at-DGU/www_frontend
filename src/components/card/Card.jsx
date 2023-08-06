// Card.jsx

import { Wrapper } from "../Wrap";
import { useState } from "react";
import TestIMG from "../../image/test.jpg";
import PenIMG from "../../image/pen.png";
import BookMark from "../index/BookMark";
import { CardWrapper, CardWWW, CardText, CardImg, HashTag } from "./CardStyle";

const Card = () => {
  const [tag, setTag] = useState("");
  const tagHandleChange = (e) => {
    setTag(e.target.value);
  };
  return (
    <>
      <CardWrapper>
        <Wrapper style={{ borderBottom: "1px solid #000" }}>
          <CardWWW>WHERE: &nbsp; </CardWWW>
          <CardText>포케 올 데이 잠실점</CardText>
        </Wrapper>
        <Wrapper style={{ borderBottom: "1px solid #000" }}>
          <CardWWW>WHAT: &nbsp; </CardWWW>
          <CardText>포케를 먹을 수 있는 식당</CardText>
        </Wrapper>
        <Wrapper style={{ borderBottom: "1px solid #000" }}>
          <CardWWW>HOW(TIPS!): &nbsp; </CardWWW>
          <CardText>연어 먹고싶다 리뷰이벤트도 된다 무료로 받으세요</CardText>
        </Wrapper>
        <Wrapper
          style={{ borderBottom: "1px solid #000", justifyContent: "center" }}
        >
          {/* <img src={`${process.env.PUBLIC_URL}/imgData/test.jpg`} /> */}
          <CardImg src={TestIMG} alt="post img" />
        </Wrapper>
        <Wrapper
          style={{ paddingTop: "20px", justifyContent: "space-between" }}
        >
          <Wrapper>
            <img src={PenIMG} alt="pen" width={"35px"} height={"35px"} />
            <HashTag
              type="text"
              value={tag}
              onChange={tagHandleChange}
              placeholder="#seoul_restaurant"
            ></HashTag>
          </Wrapper>
          <BookMark />
        </Wrapper>
      </CardWrapper>
    </>
  );
};
export default Card;
