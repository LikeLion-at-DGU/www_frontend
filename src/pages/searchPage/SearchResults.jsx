// SearchResults.jsx

import React from "react";
import {
  RecordWriter,
  SearchResult,
  SearchTitle,
  SmallImage,
} from "./SearchStyle";
import recordImg from "../../image/record1.jpg";
import { HashTag, Image, Img, TagBox, Text } from "../recordPage/RecordStyle";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ record }) => {
  const navigate = useNavigate();

  return (
    <SearchResult onClick={() => navigate("/record/1")}>
      {/* <Img width="122px" height="122px">
              <SmallImage src={recordImg} /> 
                <Image src={record.photos[0]} />
            </Img> */}
      <Text padding="10px 17px">
        <RecordWriter>
          <img></img>
          {/* <p>giogio222</p> */}
          <p>{record.writer}</p>
          {/* writer의 국가/도시로 변경해야함 */}
          <span>Iyaly/milano</span>
        </RecordWriter>
        {/* <SearchTitle>Unexpected luck!!</SearchTitle> */}
        <SearchTitle>{record.title}</SearchTitle>
        <TagBox>
          <HashTag>#milano_restaurant</HashTag>
        </TagBox>
      </Text>
    </SearchResult>
  );
};

export default SearchResults;
