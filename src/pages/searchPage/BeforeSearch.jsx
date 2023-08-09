import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Box, Box2, SubTitle } from "../recordPage/RecordStyle";
import ListCards from "../recordPage/ListCards";
import { SearchContainer } from "./SearchStyle";

const RecordSearch = () => {
    // const [searchResults, setSearchResults] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");

    // const handleSearch = async (searchType, searchTerm) => {
    //     // 나중에 검색로직으로 대체 ...
    //     const results = await fetchSearchResults(searchType, searchTerm);
    //     setSearchResults(results);
    //     setSearchTerm(searchTerm);
    // }

    return (
        <SearchContainer>
            <SearchBar />
            {/* {searchTerm && (
                <p>{searchTerm}</p>
            )}
            {searchResults.length > 0 ? (
                <div>
                    <SubTitle>record with "{searchTerm}"</SubTitle>
                    {searchResults.map((result, index) => (
                        <p key={index}>{result}</p>
                    ))}
                </div>
            ) : (
                <div style={{ width: "1122px" }}>
                    <SubTitle>record with "{searchTerm}"</SubTitle>
                    <p>Sorry. No search results found.</p>
                </div>
            )} */}
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
