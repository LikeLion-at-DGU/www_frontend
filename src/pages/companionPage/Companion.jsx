// Companion.jsx

import React, { useEffect, useState } from "react";
import { ArrayChoice, ArrayChoices, CompanionContainer, CompanionList, Continent, Continents, FixedBtnBox } from "./CompanionStyle";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { NoResult } from "../searchPage/SearchStyle";
import logo from "../../image/noresult_logo.png";
import { Box2 } from "../recordPage/RecordStyle";
import CompanionCards from "./CompanionCards";
import { RegisterBtn, RegisterImg } from "../writePage/WriteStyle";
import PenIMG from "../../image/pen.png";

const Companion = () => {

  const navigate = useNavigate();

  // 좌측 nav 선택, 정렬 선택
  const [activeBtn, setActiveBtn] = useState(null);
  const [currentSort, setCurrentSort] = useState("new");

  const handleBtnClick = (btnId) => {
    setActiveBtn(btnId);
  };
  const handleSort = (sortType) => {
    setCurrentSort(sortType);
  };

  // 좌측 nav 반응형으로 따라오게
  const [scrollY, setScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const handleScroll = () => {
    setScrollY(window.scrollY);

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    const timeoutId = setTimeout(() => {
      setScrollY(0);
    }, 400);
    setScrollTimeout(timeoutId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 검색버튼 클릭 시 reset
  const handleReset = () => {
    setActiveBtn(null);
    setCurrentSort("new");
  }

  // 검색결과
  const [searchResults, setSearchResults] = useState([]);
  // 검색어
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (searchTerm) => {
    // 가상의 데이터를 활용하여 검색 결과 설정
    // 나중에 백엔드 API 입력해줄것
    const virtualData = [
      {
        id: 1,
        title: "Result 1",
      },
      {
        id: 2,
        title: "Result 2",
      },
      {
        id: 3,
        title: "Result 3",
      },
    ];

    const filteredResults = virtualData.filter(result =>
      result.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 검색 결과를 상태로 설정
    setSearchResults(filteredResults);
  };

  return (
    <CompanionContainer>
      {/* 반응형으로 떠있는 nav */}
      {/* style={{ top: `${258 + scrollY * 0.5}px` }} */}
      <Continents style={{ top: `${258 + scrollY * 0.3}px` }}>
        {/* 지역별 대기환경 ~~ 했던 거처럼 params 이용 ... 하면 될 듯 ... */}
        {/* <Continent onClick={() => navigate(`/companion/${}`)}>대륙명</Continent> */}
        <Continent
          className={activeBtn === 1 ? "active" : ""}
          onClick={() => handleBtnClick(1)}
        >
          Africa
        </Continent>
        <Continent
          className={activeBtn === 2 ? "active" : ""}
          onClick={() => handleBtnClick(2)}
        >
          Asia
        </Continent>
        <Continent
          className={activeBtn === 3 ? "active" : ""}
          onClick={() => handleBtnClick(3)}
        >
          Europe
        </Continent>
        <Continent
          className={activeBtn === 4 ? "active" : ""}
          onClick={() => handleBtnClick(4)}
        >
          Oceania
        </Continent>
        <Continent
          className={activeBtn === 5 ? "active" : ""}
          onClick={() => handleBtnClick(5)}
        >
          North America
        </Continent>
        <Continent
          className={activeBtn === 6 ? "active" : ""}
          onClick={() => handleBtnClick(6)}
        >
          South America
        </Continent>
      </Continents>

      {/* 화면고정 버튼 */}
      <FixedBtnBox>
        <RegisterBtn onClick={() => navigate("/companion/write")}>
          <RegisterImg src={PenIMG} alt="pen" />
          register
        </RegisterBtn>
      </FixedBtnBox>

      <CompanionList>
        <SearchBar onClick={handleSearch} onReset={handleReset} />
        <ArrayChoices>
          <ArrayChoice
            className={currentSort === "new" ? "active" : ""}
            onClick={() => handleSort("new")}
          >
            New
          </ArrayChoice>
          <p style={{ margin: "0 5px" }}>|</p>
          <ArrayChoice
            className={currentSort === "mostLike" ? "active" : ""}
            onClick={() => handleSort("mostLike")}
          >
            Most Like
          </ArrayChoice>
        </ArrayChoices>
        <div>
          {/* 검색 결과 표시 */}
          {searchTerm && searchResults.length === 0 ? (
            <NoResult>
              <img
                style={{ width: "120px", marginBottom: "20px" }}
                src={logo}
              />
              Sorry. No search results found.
            </NoResult>
          ) : (
            searchResults.map((result, index) => (
              <div key={index}>
                <li>{result.title}</li>
              </div>
            ))
          )}

          <Box2
            style={{
              width: "fit-content",
              padding: "14px",
              margin: "0",
              borderLeft: "1px solid #848484",
            }}
            flexdirect="column"
          >
            <CompanionCards />
            <CompanionCards />
            <CompanionCards />
            <CompanionCards />
            <CompanionCards />
            <CompanionCards />
            <CompanionCards />
            <CompanionCards />
            <CompanionCards />
            <CompanionCards />
            <CompanionCards />
            <CompanionCards />
          </Box2>
        </div>
      </CompanionList>
    </CompanionContainer>
  );
};

export default Companion;
