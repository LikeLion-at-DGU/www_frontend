// Companion.jsx

import React, { useEffect, useState } from "react";
import { ArrayChoice, ArrayChoices, CompanionContainer, CompanionList, FixedBtnBox } from "./CompanionStyle";
import SearchBar from "./SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import { NoResult } from "../searchPage/SearchStyle";
import logo from "../../image/noresult_logo.png";
import CompanionCards from "./CompanionCards";
import { RegisterBtn, RegisterImg } from "../writePage/WriteStyle";
import PenIMG from "../../image/pen.png";
import axiosInstance from "../../../src/api/axios";
import ContinentsNav from "./ContinentsNav";

const Companion = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 검색어
  const searchTerm = new URLSearchParams(location.search).get("search");

  // 검색결과
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    } else {
      // setSearchResults([]);
      fetchAllData();
    }
  }, [searchTerm]);

  // 검색 전에도 전체 리스트 가져옴
  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/companions/");
      setSearchResults(response.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

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
      <ContinentsNav activeBtn={activeBtn} handleBtnClick={handleBtnClick} />

      {/* 화면고정 글쓰기 버튼 */}
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
          {searchTerm ? (
            searchResults.length === 0 ? (
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
            )
          ) : (
            searchResults.map((result, id) => (
              <div key={id}>
                <CompanionCards companion={result} />
              </div>
            ))
          )}
        </div>
      </CompanionList>
    </CompanionContainer>
  );
};

export default Companion;
