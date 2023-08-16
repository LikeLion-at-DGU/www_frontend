// Search.jsx

import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { SubTitle } from "../recordPage/RecordStyle";
import ListCards from "../recordPage/ListCards";
import { Box3, NoResult, SearchContainer } from "./SearchStyle";
import logo from "../../image/noresult_logo.png";
import SearchResults from "./SearchResults";
import axiosInstance from "../../../src/api/axios";

const RecordSearch = () => {
  // 검색어
  // const [searchTerm, setSearchTerm] = useState("");
  // 검색어
  const searchTerm = new URLSearchParams(location.search).get("search");
  // 검색결과
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      rcommets_cnt: 2,
      title: "테스트 Title!",
      weather: "테스트 날씨 !",
      body: "테스트 본문 !",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 13,
      likes: 5,
      writer: "sha",
      tag: ["#서울_맛집", "#룰루"],
      photos: ["testImgURL1", "testImgURL2", "testImgURL3"],
    },
    {
      id: 2,
      rcommets_cnt: 20,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
    {
      id: 3,
      rcommets_cnt: 20,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
    {
      id: 4,
      rcommets_cnt: 20,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
    {
      id: 5,
      rcommets_cnt: 20,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
    {
      id: 6,
      rcommets_cnt: 20,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
  ]);

  // 검색결과
  // useEffect(() => {
  //   axiosInstance
  //     .get('/api/records')
  //     .then(response => setSearchResults(response.data))
  //     .catch(error => console.error('Error fetching record List:', error));
  // }, [])

  // 검색어에 따른 리스트
  const handleSearch = async (searchTerm) => {
    try {
      const response = await axiosInstance.get(`/api/records/?search=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  // ListCard
  const [recordList, setRecordList] = useState([]);

  // ListCard 전체 리스트
  useEffect(() => {
    axiosInstance.get('/api/records')
      .then(response => setRecordList(response.data))
      .catch(error => console.error('Error fetching record List:', error));
  }, [])


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
              <img style={{ width: "120px", marginBottom: "20px" }} src={logo} />
              Sorry. No search results found.
            </NoResult>
          ) : (
            searchResults.map((result) => (
              // <div key={index}>
              //   <li>{result.title}</li>
              // </div>
              <div>
                <SubTitle>Records around the world!</SubTitle>
                <SearchResults key={result.id} record={result} />
              </div>
            ))
          )}
        </ul>
        <SearchResults />
      </Box3>

      {/* <Box3 flexdirect="column" height="832px"> */}
        {/* <SubTitle>Records around the world!</SubTitle> */}
        {/* <ListCards />
        <ListCards />
        <ListCards />
        <ListCards />
        <ListCards /> */}
        {/* {recordList.slice(0, 5).map(record => (
          <ListCards key={record.id} record={record} />
        ))} */}
      {/* </Box3> */}
    </SearchContainer>
  );
};

export default RecordSearch;
