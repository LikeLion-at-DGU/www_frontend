import React, { useState } from "react";
import { SearchBox, SearchBtn, SearchContainer, SearchInput, SelectType } from "./SearchStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
    const [searchType, setSearchType] = useState("word");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        const results = await onSearch(searchType, searchTerm);
        setSearchResults(results);
    };

    const handleSearchType = (type) => {
        setSearchType(type);
        setSearchTerm("");
    };

    return (
        <SearchBox>
            <SelectType value={searchType} onChange={(e) => handleSearchType(e.target.value)}>
                <option value="word">words</option>
                <option value="hashtag">hastag</option>
            </SelectType>
            <SearchInput
                type="text"
                placeholder={searchType === "word" ? "type a words." : "#napoli_store"}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchBtn onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
            </SearchBtn>
        </SearchBox>
    );
};

export default SearchBar;