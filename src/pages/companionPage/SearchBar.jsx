// SearchBar.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchBox, SearchBtn, SearchInput } from "../searchPage/SearchStyle";
import { SearchType } from "./CompanionStyle";

const SearchBar = ({onClick, onReset}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    // 검색결과 리셋
    const handleReset = () => {
        onReset();
    }

    // url에 검색어추가
    const handleSearchURL = () => {
        if (searchTerm) {
            onClick(searchTerm);
            handleReset();
            navigate(`/companions/?search=${searchTerm}`)
    }}

    return (
        <SearchBox>
            <SearchType>country</SearchType>
            <SearchInput
                type="text"
                placeholder="type a country."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchBtn onClick={handleSearchURL} >
                <FontAwesomeIcon icon={faSearch} />
            </SearchBtn>
        </SearchBox>
    );
};

export default SearchBar;