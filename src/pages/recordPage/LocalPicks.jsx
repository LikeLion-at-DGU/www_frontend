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

// const LocalPicks = ({ record_cards }) => {
//여기부터는 임의 데이터입니당 - 현아
const LocalPicks = ({ record }) => {
  console.log(record);

  //여기까지 임의 데이터입니당 - 현아
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // .record_cards => id,record(포함된 record),where,what,how,card_photo_1,2,3,tag[]

  return (
    <LocalPick
      onClick={() => navigate(`/records/${card.id}`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Img width="262px" height="245px">
        {/* <Image radius="20px" src={record_cards.card_photo_1} /> */}
        <InTagBox>
          {record_cards.tag.map(() => (
            // <HashTag>{card.tag}</HashTag>
            <HashTag>london_restaurant</HashTag>
          ))}
        </InTagBox>
      </Img>
      <HoverOverlay2 isHovered={isHovered}>
        {/* {cards.where} */}
        Five guys Tower Bridge
      </HoverOverlay2>
    </LocalPick>
  );
};

export default LocalPicks;
