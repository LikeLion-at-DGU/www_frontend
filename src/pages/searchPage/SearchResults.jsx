// SearchResults.jsx

import React from 'react'
import { SearchResult, SearchTitle, SmallImage } from './SearchStyle'
import recordImg from "../../image/record1.jpg"
import { Image, Img, Text } from '../recordPage/RecordStyle'

function SearchResults() {
    return (
        <SearchResult>
            <Img width="122px" height="122px">
                <SmallImage src={recordImg} />
            </Img>
            <Text>
                <SearchTitle>Unexpected luck!!</SearchTitle>

            </Text>
        </SearchResult>
    )
}

export default SearchResults