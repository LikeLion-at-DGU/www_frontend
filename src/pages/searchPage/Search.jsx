// Search.jsx

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Box, Box2, SubTitle } from "../recordPage/RecordStyle";
import ListCards from "../recordPage/ListCards";
import { NoResult, SearchContainer } from "./SearchStyle";
import logo from "../../image/noresult_logo.png";
// import axios from "axios";

const RecordSearch = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // // YOUR_API_URL -> 나중에 백엔드 API 입력해줄것
  // const handleSearch = async(searchTerm, searchType) => {
  //   try {
  //     const response = await axios.get(`YOUR_API_URL?q=${searchTerm}`);
  //     setSearchResults(response.data);
  //   } catch (error) {
  //     console.log("ERROR: ", error);
  //   }
  // };

  const handleSearch = async (searchTerm, searchType) => {
    // 가상의 데이터를 활용하여 검색 결과 설정
    // 나중에 위에 코드로 바꿔줘야 함 (include 부분 추가해서..?)
    const virtualData = [
      {
        id: 1,
        title: "Example Result 1",
      },
      {
        id: 2,
        title: "Example Result 2",
      },
      {
        id: 3,
        title: "Example Result 3",
      },
    ];

    const filteredResults = virtualData.filter(result =>
      result.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 검색결과 저장
    setSearchResults(filteredResults);
    // 검색어 저장
    setSearchTerm(searchTerm);
  };

  return (
    <SearchContainer>
      <SearchBar onClick={handleSearch} />

      <Box2 flexdirect="column">
        {searchTerm && (
          <div>
            <SubTitle>{`record with "${searchTerm}"`}</SubTitle>
          </div>
        )}
        <ul>
          {(searchTerm) && (searchResults.length === 0) ? (
            <NoResult>
              <img style={{width: "120px", marginBottom: "20px"}} src={logo} />
              Sorry. No search results found.
            </NoResult>
          ) : (
            searchResults.map((result, index) => (
              <div key={index}>
                <li>{result.title}</li>
              </div>
            ))
          )}
        </ul>
      </Box2>

      <Box2 flexdirect="column" height="832px">
        <SubTitle>Records around the world!</SubTitle>
        {/* 나중에 '전체 글 목록'이 불러와질 수 있게 수정 */}
        <ListCards />
        <ListCards />
        <ListCards />
        <ListCards />
        <ListCards />
      </Box2>
    </SearchContainer>
  );
};

export default RecordSearch;
