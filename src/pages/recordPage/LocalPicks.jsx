import React, { useState } from "react";
import {
  HashTag,
  HoverOverlay2,
  Image,
  Img,
  InTagBox,
  LocalPick,
} from "./RecordStyle";
import recordImg from "../../image/record3.png";
import { useNavigate } from "react-router-dom";

// const LocalPicks = ({ card }) => {
  // console.log(card);
  // const LocalPicks = ({ record_cards }) => {
  //여기부터는 임의 데이터입니당 - 현아
  const LocalPicks = () => {
    const card ={
        where: "김강민",
        what: "김강민",
        how: "김강민",
        tag: ["test1","test2"],
        "card_photo_1": null,
        "card_photo_2": null,
        "card_photo_3": null,
    }

  //여기까지 임의 데이터입니당 - 현아
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <LocalPick
      onClick={() => navigate(`/records/1`)} //레코드 아이디 달라고 하기
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Img width="262px" height="245px">
        <Image radius="20px" src={recordImg} />
        {/* <Image radius="20px" src={record_cards.card_photo_1} /> */}
        <InTagBox>
          {card.tag &&
            card.tag.map((tag) => (
              <HashTag>#{tag}</HashTag>
              // <HashTag>london_restaurant</HashTag>
            ))}
        </InTagBox>
      </Img>
      <HoverOverlay2 isHovered={isHovered}>
        {card.where}
        {/* Five guys Tower Bridge */}
      </HoverOverlay2>
    </LocalPick>
  );
};

export default LocalPicks;
