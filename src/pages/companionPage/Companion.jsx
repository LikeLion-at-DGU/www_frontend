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
      fetchAllData();
    }
  }, [searchTerm]);

  // 전체 리스트
  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/companions/");
      setSearchResults(response.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  // 검색어에 따른 리스트
  const handleSearch = async (searchTerm) => {
    try {
      const response = await axiosInstance.get(`/api/companions/?search=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };


  // 좌측 nav 아이디, 대륙 매핑
  const continentIdToName = {
    1: "Africa",
    2: "Asia",
    3: "Europe",
    4: "Oceania",
    // 띄어쓰기 어떻게 되는지 확인해야함
    5: "North America",
    6: "South America",
  }
  const getContinentName = (continentId) => {
    return continentIdToName[continentId];
  }

  // 좌측 nav 선택, 정렬 대륙선택
  const [activeBtn, setActiveBtn] = useState(null);
  const [currentSort, setCurrentSort] = useState("new");

  const handleBtnClick = (btnId) => {
    setActiveBtn(btnId);
    const continentName = getContinentName(btnId);
    fetchContinentData(continentName);
    navigate(`/companions/?continent=${continentName}`);
  };
  const handleSort = (sortType) => {
    setCurrentSort(sortType);
  };

  // 대륙에 따른 리스트
  const fetchContinentData = async (continentId) => {
    try {
      const response = await axiosInstance.get(`/api/companions/?continent=${continentId}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log("ERROR", error);
    }
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
