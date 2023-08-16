import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Test, TravelBox, IndexBox, WwwBox, BuddyTitle } from "./MainpageStyle";
import Like from "../../components/index/Like";
import CountryName from "../../components/index/Country";
import CityName from "../../components/index/CityName";
import DateName from "../../components/index/DateName";
import useScrollFadeIn from "./useScroll";
import { Link } from "react-router-dom";

const BuddyStyle = styled(Test)`
  ${(props) =>
    props.isEven &&
    css`
      justify-content: flex-end;
    `}
`;

const TravelBoxChange = styled(TravelBox)`
  ${(props) =>
    props.isEven
      ? css`
          border-bottom-right-radius: 0;
        `
      : css`
          border-bottom-left-radius: 0;
        `}
`;

const Buddy = ({ data, isEven }) => {
  const [isVisible, setIsVisible] = useState(false);

  const truncatedText =
    data && data.length > 30 ? data.slice(0, 30) + "..." : data;

  const fadeIn = useScrollFadeIn(); // useScrollFadeIn 훅 호출

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
        threshold: 0.9, // 70% 이상 보일 때 실행
      }
    );

    const targetElement = document.querySelector(".visible-trigger");
    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <BuddyStyle isEven={isEven}>
      <Test
        className={`visible-trigger ${isVisible ? "visible" : ""}`}
        ref={fadeIn.ref}
        style={fadeIn.style}
      >
        <Link to={"companion"}>
          <TravelBoxChange isEven={isEven}>
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
            <BuddyTitle>
              {/* {truncatedText || "Today Hanoi nightscape!!"} */}
              {truncatedText.title}
            </BuddyTitle>
          </TravelBoxChange>
        </Link>
      </Test>
    </BuddyStyle>
  );
};

export default Buddy;
