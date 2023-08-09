import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import {
  TravelContainer,
  Test,
  TravelBox,
  IndexBox,
  WwwBox,
  BuddyTitle,
} from "./MainpageStyle";
import Like from "../../components/index/Like";
import CountryName from "../../components/index/Country";
import CityName from "../../components/index/CityName";
import DateName from "../../components/index/DateName";

const fadeAndSlide = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const BuddyStyle = styled(Test)`
  ${(props) =>
    props.isEven &&
    css`
      justify-content: flex-end;
    `}
`;

const Buddy = ({ data, isEven }) => {
  const [isVisible, setIsVisible] = useState(false);

  const truncatedText =
    data && data.length > 30 ? data.slice(0, 30) + "..." : data;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.7, // 70% 이상 보일 때 실행
      }
    );

    const targetElement = document.querySelector(".visible-trigger");
    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <BuddyStyle isEven={isEven} className={isVisible ? "visible" : ""}>
      <Test className={`visible-trigger ${isVisible ? "visible" : ""}`}>
        <TravelBox>
          <IndexBox>
            <WwwBox>
              <DateName handlefsize={"14px"} />
              <CountryName handlefsize={"14px"} />
              <CityName handlefsize={"14px"} />
            </WwwBox>
            <Like
              handlewidth={"43px"}
              handleheight={"24px"}
              handlefsize={"14px"}
            />
          </IndexBox>
          <BuddyTitle>{truncatedText || "Today Hanoi nightscape!!"}</BuddyTitle>
        </TravelBox>
      </Test>
    </BuddyStyle>
  );
};

export default Buddy;
