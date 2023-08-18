import React, { useState } from "react";
import {
  HashTag,
  HoverOverlay2,
  Image,
  Img,
  InTagBox,
  LocalPick,
} from "./RecordStyle";
import { useNavigate } from "react-router-dom";

const LocalPicks = ({ data }) => {
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
      onClick={() => navigate(`/records/${data.id}`)} //레코드 아이디 달라고 하기
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Img width="262px" height="245px">
        {/* <Image radius="20px" src={recordImg} /> */}
        <Image radius="20px" src={data.card_photo_1} />
        <InTagBox>
          {data.tag &&
            data.tag.map((tag) => (
              <HashTag>#{tag}</HashTag>
              // <HashTag>london_restaurant</HashTag>
            ))}
        </InTagBox>
      </Img>
      <HoverOverlay2 isHovered={isHovered}>
        {data.where}
        {/* Five guys Tower Bridge */}
      </HoverOverlay2>
    </LocalPick>
  );
};

export default LocalPicks;
