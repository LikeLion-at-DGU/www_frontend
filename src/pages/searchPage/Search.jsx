// Search.jsx

import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { SubTitle } from "../recordPage/RecordStyle";
import ListCards from "../recordPage/ListCards";
import { Box3, NoResult, SearchContainer } from "./SearchStyle";
import logo from "../../image/noresult_logo.png";
import SearchResults from "./SearchResults";
import axiosInstance from "../../../src/api/axios";
import { useLocation } from "react-router-dom";

const RecordSearch = () => {
  const location = useLocation();
  // 검색어
  // const [searchValue, setSearchValue] = useState("");
  // 검색어
  const searchValue = new URLSearchParams(location.search).get("search");
  // 검색결과
  const [searchResults, setSearchResults] = useState([
    // {
    //   id: 1,
    //   rcommets_cnt: 2,
    //   title: "테스트 Title!",
    //   weather: "테스트 날씨 !",
    //   body: "테스트 본문 !",
    //   created_at: "2023-08-14",
    //   updated_at: "2023-08-14",
    //   views: 13,
    //   likes: 5,
    //   writer: "sha",
    //   tag: ["#서울_맛집", "#룰루"],
    //   photos: ["testImgURL1", "testImgURL2", "testImgURL3"],
    // },
    // {
    //   id: 2,
    //   rcommets_cnt: 20,
    //   title: "테스트 Title 2!",
    //   weather: "테스트 날씨 2!",
    //   body: "테스트 본문 2!",
    //   created_at: "2023-08-14",
    //   updated_at: "2023-08-14",
    //   views: 113,
    //   likes: 51,
    //   writer: "sha22",
    //   tag: ["#서울_맛집2", "#룰루2"],
    //   photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    // },
    // {
    //   id: 3,
    //   rcommets_cnt: 20,
    //   title: "테스트 Title 2!",
    //   weather: "테스트 날씨 2!",
    //   body: "테스트 본문 2!",
    //   created_at: "2023-08-14",
    //   updated_at: "2023-08-14",
    //   views: 113,
    //   likes: 51,
    //   writer: "sha22",
    //   tag: ["#서울_맛집2", "#룰루2"],
    //   photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    // },
    // {
    //   id: 4,
    //   rcommets_cnt: 20,
    //   title: "테스트 Title 2!",
    //   weather: "테스트 날씨 2!",
    //   body: "테스트 본문 2!",
    //   created_at: "2023-08-14",
    //   updated_at: "2023-08-14",
    //   views: 113,
    //   likes: 51,
    //   writer: "sha22",
    //   tag: ["#서울_맛집2", "#룰루2"],
    //   photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    // },
    // {
    //   id: 5,
    //   rcommets_cnt: 20,
    //   title: "테스트 Title 2!",
    //   weather: "테스트 날씨 2!",
    //   body: "테스트 본문 2!",
    //   created_at: "2023-08-14",
    //   updated_at: "2023-08-14",
    //   views: 113,
    //   likes: 51,
    //   writer: "sha22",
    //   tag: ["#서울_맛집2", "#룰루2"],
    //   photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    // },
    // {
    //   id: 6,
    //   rcommets_cnt: 20,
    //   title: "테스트 Title 2!",
    //   weather: "테스트 날씨 2!",
    //   body: "테스트 본문 2!",
    //   created_at: "2023-08-14",
    //   updated_at: "2023-08-14",
    //   views: 113,
    //   likes: 51,
    //   writer: "sha22",
    //   tag: ["#서울_맛집2", "#룰루2"],
    //   photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    // },
  ]);
  console.log(searchResults);

  // 검색결과
  // useEffect(() => {
  //   axiosInstance
  //     .get('/api/records')
  //     .then(response => setSearchResults(response.data))
  //     .catch(error => console.error('Error fetching record List:', error));
  // }, [])

  useEffect(() => {
    if (searchValue) {
      handleSearch(searchValue);
    } else {
      fetchAllData();
    }
  }, [searchValue]);

  // 검색어에 따른 리스트
  const handleSearch = async (searchValue) => {
    try {
      const response = await axiosInstance.get(`/api/records/?search=${searchValue}/`);
      setSearchResults(response.data);
      // setSearchValue(searchValue);
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  // console.log(searchResults);

  // 전체 리스트
  // const [recordList, setRecordList] = useState([
  //   {
  //     id: 1,
  //     rcommets_cnt: 2,
  //     title: "테스트 Title!",
  //     weather: "테스트 날씨 !",
  //     body: "테스트 본문 !",
  //     created_at: "2023-08-14",
  //     updated_at: "2023-08-14",
  //     views: 13,
  //     likes: 5,
  //     writer: "sha",
  //     tag: ["#서울_맛집", "#룰루"],
  //     photos: ["testImgURL1", "testImgURL2", "testImgURL3"],
  //   },
  //   {
  //     id: 2,
  //     rcommets_cnt: 20,
  //     title: "테스트 Title 2!",
  //     weather: "테스트 날씨 2!",
  //     body: "테스트 본문 2!",
  //     created_at: "2023-08-14",
  //     updated_at: "2023-08-14",
  //     views: 113,
  //     likes: 51,
  //     writer: "sha22",
  //     tag: ["#서울_맛집2", "#룰루2"],
  //     photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
  //   },
  //   {
  //     id: 3,
  //     rcommets_cnt: 20,
  //     title: "테스트 Title 2!",
  //     weather: "테스트 날씨 2!",
  //     body: "테스트 본문 2!",
  //     created_at: "2023-08-14",
  //     updated_at: "2023-08-14",
  //     views: 113,
  //     likes: 51,
  //     writer: "sha22",
  //     tag: ["#서울_맛집2", "#룰루2"],
  //     photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
  //   },
  //   {
  //     id: 4,
  //     rcommets_cnt: 20,
  //     title: "테스트 Title 2!",
  //     weather: "테스트 날씨 2!",
  //     body: "테스트 본문 2!",
  //     created_at: "2023-08-14",
  //     updated_at: "2023-08-14",
  //     views: 113,
  //     likes: 51,
  //     writer: "sha22",
  //     tag: ["#서울_맛집2", "#룰루2"],
  //     photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
  //   },
  //   {
  //     id: 5,
  //     rcommets_cnt: 20,
  //     title: "테스트 Title 2!",
  //     weather: "테스트 날씨 2!",
  //     body: "테스트 본문 2!",
  //     created_at: "2023-08-14",
  //     updated_at: "2023-08-14",
  //     views: 113,
  //     likes: 51,
  //     writer: "sha22",
  //     tag: ["#서울_맛집2", "#룰루2"],
  //     photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
  //   },
  //   {
  //     id: 6,
  //     rcommets_cnt: 20,
  //     title: "테스트 Title 2!",
  //     weather: "테스트 날씨 2!",
  //     body: "테스트 본문 2!",
  //     created_at: "2023-08-14",
  //     updated_at: "2023-08-14",
  //     views: 113,
  //     likes: 51,
  //     writer: "sha22",
  //     tag: ["#서울_맛집2", "#룰루2"],
  //     photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
  //   },
  // ]);
  const fetchAllData = async () => {
    try {
      const response = await axiosInstance.get("/api/records/");
      setSearchResults(response.data);
      console.log(searchResults);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  // ListCard 전체 리스트
  // useEffect(() => {
  //   axiosInstance.get('/api/records/')
  //     .then(response => setRecordList(response.data))
  //     .catch(error => console.error('Error fetching record List:', error));
  // }, [])


  return (
    <SearchContainer>
      <SearchBar onClick={handleSearch} />

      <Box3 flexdirect="column">
        {/* {searchValue && (searchResults.length > 0) && (
          <div>
            <SubTitle>{`record with "${searchValue}"`}</SubTitle>
            <ul>
              {searchResults.map((result) => (
                <SearchResults key={result.id} record={result} />
              ))}
            </ul>
          </div>
        )}
        {searchValue && (searchResults.length === 0) && (
          <NoResult>
            <img style={{ width: "120px", marginBottom: "20px" }} src={logo} />
            Sorry. No search results found.
          </NoResult>
        )} */}
        <div>
          {searchValue ? (
            searchResults.length === 0 ? (
              <>
              <SubTitle>{`record with "${searchValue}"`}</SubTitle>
              <NoResult>
                <img
                  style={{ width: "120px", marginBottom: "20px" }}
                  src={logo}
                />
                Sorry. No search results found.
              </NoResult>
              </>
            ) : (
              <>
              <SubTitle>{`record with "${searchValue}"`}</SubTitle>
              {searchResults.map((result, id) => (
                <div key={id}>
                  <SearchResults record={result} />
                </div>
              ))}
              </>
            )
          ) : (
            <></>
          )}
        </div>
      </Box3>

      {/* 
      <Box3 flexdirect="column">
        {searchTerm && (
          <div>
            <SubTitle>{`record with "${searchTerm}"`}</SubTitle>
          </div>
        )}
        <ul>
        {searchTerm && searchResults.length === 0 && (
          <div>
            <SubTitle>{`record with "${searchTerm}"`}</SubTitle>
            <NoResult>
              <img style={{ width: "120px", marginBottom: "20px" }} src={logo} />
              Sorry. No search results found.
            </NoResult>
          </div>
        )}
        {searchTerm && searchResults.length > 0 && (
          <div>
            <SubTitle>Records around the world!</SubTitle>
            <ul>
              {searchResults.map((result) => (
                <SearchResults key={result.id} record={result} />
                // <ListCards key={result.id} record={result} />
              ))}
            </ul>
          </div>
        )}
        </ul>
      </Box3> */}

      <Box3 flexdirect="column" height="850px">
        <SubTitle>Records around the world!</SubTitle>
        {/* <ListCards />
        <ListCards />
        <ListCards />
        <ListCards />
        <ListCards /> */}
        {searchResults.slice(0, 5).map((record) => (
          <ListCards key={record.id} record={record} />
        ))}
      </Box3>
    </SearchContainer>
  );
};

export default RecordSearch;
