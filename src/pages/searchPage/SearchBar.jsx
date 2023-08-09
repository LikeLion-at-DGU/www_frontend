// SearchBar.jsx

import React, { useState } from "react";
import { SearchBox, SearchBtn, SearchContainer, SearchInput, SelectType } from "./SearchStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({onClick}) => {
    const [searchType, setSearchType] = useState("word");
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchType = (type) => {
        setSearchType(type);
        setSearchTerm("");
    };

    return (
        <SearchBox>
            <SelectType value={searchType} onChange={(e) => handleSearchType(e.target.value)}>
                <option value="word">words</option>
                <option value="hashtag">hashtag</option>
            </SelectType>
            <SearchInput
                type="text"
                placeholder={searchType === "word" ? "type a words." : "#city_keyword  please use this form!"}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchBtn onClick={() => onClick(searchTerm, searchType)} >
                <FontAwesomeIcon icon={faSearch} />
            </SearchBtn>
        </SearchBox>
    );
};

export default SearchBar;