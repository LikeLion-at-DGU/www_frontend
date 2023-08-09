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
  ImgCardBorder,CardInput,
  CardInfo,
  CardText,
  CardImg,
  HashTag,
  PenImg,
} from "./CardStyle";
import { SaveBtn } from "../../pages/writePage/WriteStyle";

const MakeCard = () => {
  const [tag, setTag] = useState("");
  const tagHandleChange = (e) => {
    setTag(e.target.value);
  };
  return (
    <>
      <CardWrapper>
        <CardBorder>
          <CardWWW>WHERE: &nbsp; </CardWWW>
          <CardInput type="text" />
        </CardBorder>
        <CardBorder>
          <CardWWW>WHAT: &nbsp; </CardWWW>
          <CardInput type="text" />
        </CardBorder>
        <CardBorder>
          <CardWWW>HOW(TIPS!): &nbsp; </CardWWW>
          <CardInput type="text" />
        </CardBorder>
        <ImgCardBorder>
          <CardImg src={TestIMG} alt="post img" />
        </ImgCardBorder>
        <CardInfo>
          <Wrapper>
            <PenImg src={PenIMG} alt="pen" />
            <HashTag
              type="text"
              value={tag}
              onChange={tagHandleChange}
              placeholder="#seoul_restaurant"
            ></HashTag>
          </Wrapper>
          <SaveBtn>save</SaveBtn>
        </CardInfo>
      </CardWrapper>
    </>
  );
};
export default MakeCard;
