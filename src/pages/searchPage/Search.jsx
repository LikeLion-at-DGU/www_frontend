// Search.jsx

import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { SubTitle } from "../recordPage/RecordStyle";
import ListCards from "../recordPage/ListCards";
import { Box3, NoResult, SearchContainer } from "./SearchStyle";
import logo from "../../image/noresult_logo.png";
import axios from "axios";
import SearchResults from "./SearchResults";

const RecordSearch = () => {

  // 검색결과
  const [searchResults, setSearchResults] = useState([]);
  // 검색어
  const [searchTerm, setSearchTerm] = useState("");
  // ListCard
  const [recordList, setRecordList] = useState([]);

  useEffect(() => {
    axios.get('/api/records')
    .then(response => setRecordList(response.data))
    .catch(error => console.error('Error fetching record List:', error));
  }, [])

  // // 검색 -> 나중에 백엔드 API 입력해줄것
  // const handleSearch = async(searchTerm, searchType) => {
  //   try {
  //     const response = await axios.get(`/api/records?q=${searchTerm}`);
  //     setSearchResults(response.data);
  //     setSearchTerm(searchTerm);
  //   } catch (error) {
  //     console.log("ERROR: ", error);
  //   }
  // };

  const handleSearch = async (searchTerm, searchType) => {
    // 가상의 데이터를 활용하여 검색 결과 설정
    // 나중에 위에 코드로 바꿔줘야 함
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

    // 검색결과
    setSearchResults(filteredResults);
    // 검색어
    setSearchTerm(searchTerm);
  };

  return (
    <SearchContainer>
      <SearchBar onClick={handleSearch} />

      <Box3 flexdirect="column">
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
        <SearchResults />
      </Box3>

      <Box3 flexdirect="column" height="832px">
        <SubTitle>Records around the world!</SubTitle>
        {/* <ListCards />
        <ListCards />
        <ListCards />
        <ListCards />
        <ListCards /> */}
        {recordList.slice(0, 5).map(record => (
          <ListCards key={record.id} record={record} />
        ))}
      </Box3>
    </SearchContainer>
  );
};

export default RecordSearch;
