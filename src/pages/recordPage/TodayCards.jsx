import React, { useState } from "react";
import { BigImage, City, HoverOverlay, Img, ProfileImg, TitleBox, TodayCard, TodayTitle, Writer } from "./RecordStyle";
import recordImg from "../../image/record2.jpg"
import { useNavigate } from "react-router-dom";

const TodayCards = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
      <TodayCard
        onClick={() => navigate("/record/1")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Img width="100%" height={isHovered ? "335px" : "262px"}>
          <BigImage
            src={recordImg}
            rightradius={isHovered ? "20px" : ""}
            leftradius={isHovered ? "20px" : ""}
          />
        </Img>
        <TitleBox padding="18px" juscon="space-between" isHovered={isHovered}>
          <TodayTitle>London life</TodayTitle>
          <Writer>
            <p>by</p>
            <ProfileImg></ProfileImg>
            harry.lena
            <City>England/london</City>
          </Writer>
        </TitleBox>
        <HoverOverlay isHovered={isHovered}>
          <TodayTitle>London life</TodayTitle>
          <Writer>
            <p>by</p>
            <ProfileImg></ProfileImg>
            harry.lena
            <City>England/london</City>
          </Writer>
          <div>
            The definition of friendships between opposite genders becomes
            somewhat ambiguous depending on how we interpret the term “friend”.
            It is entirely possible to be friends on a casual level, engaging in
            common hobbies, academic pursuits, or daily activities. However, as
            the level of intimacy deepens, it may become increasingly difficult
            to distinguish between platonic feelings and romantic emotions, and
            ...
          </div>
        </HoverOverlay>
      </TodayCard>
    );
};

export default TodayCards;