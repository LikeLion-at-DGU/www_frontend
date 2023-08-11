// SearchBar.jsx

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { SearchBox, SearchBtn, SearchInput } from "../searchPage/SearchStyle";
import { SearchType } from "./CompanionStyle";

const SearchBar = ({onClick, onReset}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleReset = () => {
        // setSearchTerm("");
        onReset();
    }

    return (
        <SearchBox>
            <SearchType>country</SearchType>
            <SearchInput
                type="text"
                placeholder="type a country."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchBtn onClick={() => {onClick(searchTerm); handleReset();}} >
                <FontAwesomeIcon icon={faSearch} />
            </SearchBtn>
        </SearchBox>
    );
};

export default SearchBar;