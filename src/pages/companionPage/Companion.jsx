// Companion.jsx

import React, { useEffect, useState } from "react";
import { ArrayChoice, ArrayChoices, CompanionContainer, CompanionList, Continent, Continents, FixedBtnBox } from "./CompanionStyle";
import SearchBar from "./SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import { NoResult } from "../searchPage/SearchStyle";
import logo from "../../image/noresult_logo.png";
import { Box2 } from "../recordPage/RecordStyle";
import CompanionCards from "./CompanionCards";
import { RegisterBtn, RegisterImg } from "../writePage/WriteStyle";
import PenIMG from "../../image/pen.png";
import axiosInstance from "../../../src/api/axios";

const Companion = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 검색어
  // const useQuery = () => {
  //   return new URLSearchParams(useLocation().search);
  // };
  // let query = useQuery();
  // const searchTerm = query.get("search");
  const searchTerm = new URLSearchParams(location.search).get("search");

  // 검색결과
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      // rcommets_cnt: 2,
      title: "테스트 Title 1!",
      weather: "테스트 날씨 !",
      body: "테스트 본문 !",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      country: "vietnam",
      // views: 13,
      // likes: 5,
      writer: "sha",
      photos: ["testImgURL1", "testImgURL2", "testImgURL3"],
    },
    {
      id: 2,
      // rcommets_cnt: 20,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      country: "vietnam",
      // views: 113,
      // likes: 51,
      writer: "sha22",
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
    {
      id: 3,
      // rcommets_cnt: 20,
      title: "테스트 Title 3!",
      weather: "테스트 날씨 3!",
      body: "테스트 본문 3!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      country: "vietnam",
      // views: 113,
      // likes: 51,
      writer: "sha22",
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
    {
      id: 4,
      // rcommets_cnt: 20,
      title: "테스트 Title 4!",
      weather: "테스트 날씨 4!",
      body: "테스트 본문 4!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      country: "vietnam",
      // views: 113,
      // likes: 51,
      writer: "sha22",
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
    {
      id: 5,
      // rcommets_cnt: 20,
      title: "테스트 Title 5!",
      weather: "테스트 날씨 5!",
      body: "테스트 본문 5!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      country: "vietnam",
      // views: 113,
      // likes: 51,
      writer: "sha22",
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
    {
      id: 6,
      // rcommets_cnt: 20,
      title: "테스트 Title 6!",
      weather: "테스트 날씨 6!",
      body: "테스트 본문 6!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      country: "korea",
      // views: 113,
      // likes: 51,
      writer: "sha22",
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
  ]);
  console.log(searchResults);
  console.log(searchResults[0]);

  // useEffect(() => {
  //   if (searchTerm) {
  //     handleSearch(searchTerm);
  //   }
  // }, [searchTerm]);
  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = async (searchTerm) => {
    try {
      // const response = await axiosInstance.get(`/api/search?q=${searchTerm}`);
      const response = await axiosInstance.get(`/api/companions/?search=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  // 좌측 nav 선택, 정렬 대륙선택
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

      {/* 검색창 ~ 리스트 */}
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
          {/* {searchResults.length > 0 ? (
            <div>
            {searchResults.map((result) => {
              return (
                <div key={result.id}>
                  <CompanionCards companion={result} />
                </div>
              );
            })}
          </div>
          ) : (
            <NoResult>
              <img
                style={{ width: "120px", marginBottom: "20px" }}
                src={logo}
              />
              Sorry. No search results found.
            </NoResult>
          )} */}
          {searchTerm && searchResults.length === 0 ? (
            <NoResult>
              <img
                style={{ width: "120px", marginBottom: "20px" }}
                src={logo}
              />
              Sorry. No search results found.
            </NoResult>
          ) : (
            searchResults.map((result, id) => (
              <div key={id}>
                <CompanionCards companion={result} />
              </div>
            ))
          )}

          {/* <Box2
            style={{
              width: "fit-content",
              padding: "14px",
              margin: "0",
              borderLeft: "1px solid #848484",
            }}
            flexdirect="column"
          >
          </Box2> */}
        </div>
      </CompanionList>
    </CompanionContainer>
  );
};

export default Companion;
