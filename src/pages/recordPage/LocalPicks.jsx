import React, { useState } from "react";
import {
  HashTag,
  HoverOverlay2,
  Img,
  InTagBox,
  LocalPick,
  RecordImage,
  TagBox,
} from "./RecordStyle";
import recordImg from "../../image/record3.png";
import { useNavigate } from "react-router-dom";

const LocalPicks = () => {
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
      onClick={() => navigate("/record/1")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Img width="262px" height="245px">
        <RecordImage radius="20px" src={recordImg} />
        <InTagBox>
          <HashTag>#london_restaurant</HashTag>
        </InTagBox>
      </Img>
      <HoverOverlay2 isHovered={isHovered}>
        Five guys Tower Bridge
      </HoverOverlay2>
    </LocalPick>
  );
};

export default LocalPicks;
