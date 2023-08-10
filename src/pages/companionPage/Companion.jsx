// Discussion.jsx

import React, { useEffect, useState } from "react";
import { ArrayChoice, ArrayChoices, CompanionContainer, CompanionList, CompanionNav, Continent } from "./CompanionStyle";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Companion = () => {
  const navigate = useNavigate();

  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CompanionContainer>

      {/* 반응형으로 떠있는 nav */}
      <CompanionNav style={{top: `${257 + scrollY * 0.5}px`}}>
          {/* 지역별 대기환경 ~~ 했던 거처럼 params 이용 ... 하면 될 듯 ... */}
          {/* <Continent onClick={() => navigate(`/companion/${}`)}>대륙명</Continent> */}
          <Continent>Africa</Continent>
          <Continent>Asia</Continent>
          <Continent>Europe</Continent>
          <Continent>Oceania</Continent>
          <Continent>North America</Continent>
          <Continent>South America</Continent>
      </CompanionNav>

      <CompanionList>
        <SearchBar></SearchBar>
        <ArrayChoices>
          <ArrayChoice>New</ArrayChoice>
          <p style={{margin: "0 5px"}}>|</p>
          <ArrayChoice>Most Like</ArrayChoice>
        </ArrayChoices>

      </CompanionList>

    </CompanionContainer>
  );
};

export default Companion;
