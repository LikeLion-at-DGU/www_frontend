// SearchBar.jsx

import React, { useState } from "react";
import { SearchBox, SearchBtn, SearchInput, SelectType } from "./SearchStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onClick }) => {
    const navigate = useNavigate();
    const [searchType, setSearchType] = useState("word");
    const [searchValue, setSearchValue] = useState("");

    const handleSearchType = (type) => {
        setSearchType(type);
        setSearchValue("");
    };
    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    };

    // url에 검색어추가
    const handleSearchURL = () => {
        if (searchValue) {
            onClick(searchValue);
            // handleReset();
            navigate(`/records/?search=${searchValue}`)
        }
    }

    return (
        <SearchBox>
            <SelectType value={searchType} onChange={(e) => handleSearchType(e.target.value)}>
                <option value="word">words</option>
                <option value="hashtag">hashtag</option>
            </SelectType>
            <SearchInput
                type="text"
                placeholder={searchType === "word" ? "type a words." : "#city_keyword  please use this form!"}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                // onChange={handleChange}
            />
            {/* <SearchBtn onClick={() => onClick(searchValue, searchType)} > */}
            <SearchBtn onClick={handleSearchURL} >
                <FontAwesomeIcon icon={faSearch} />
            </SearchBtn>
        </SearchBox>
    );
};

export default SearchBar;