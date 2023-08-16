// Record.jsx

import React, { useState, useEffect } from "react";
import { Box, Box2, Btn, RecordContainer, SubTitle } from "./RecordStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faSearch } from "@fortawesome/free-solid-svg-icons";
import RecordMain from "../../image/record_main.png";
import RecordSub from "../../image/record_sub.png";
import FriendCards from "./FriendCards";
import TodayCards from "./TodayCards";
import ListCards from "./ListCards";
import LocalPicks from "./LocalPicks";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../src/api/axios";

const Record = () => {
  const navigate = useNavigate();
  const [recordList, setRecordList] = useState([
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
    },,
    {
      id: 3,
      rcommets_cnt: 20,
      title: "테스트 Title 3!",
      weather: "테스트 날씨 3!",
      body: "테스트 본문 3!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },,
    {
      id: 4,
      rcommets_cnt: 20,
      title: "테스트 Title 4!",
      weather: "테스트 날씨 4!",
      body: "테스트 본문 4!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },,
    {
      id: 5,
      rcommets_cnt: 20,
      title: "테스트 Title 5!",
      weather: "테스트 날씨 5!",
      body: "테스트 본문 5!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },,
    {
      id: 6,
      rcommets_cnt: 20,
      title: "테스트 Title 6!",
      weather: "테스트 날씨 6!",
      body: "테스트 본문 6!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
  ]);

  useEffect(() => {
    axiosInstance
      .get("/api/records")
      .then((response) => {
        setRecordList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <RecordContainer>
      <div style={{ width: "1122px" }}>
        <img style={{ margin: "56px 0 21px 0" }} src={RecordMain} />
        <br />
        <img src={RecordSub} />
      </div>

      <Box flexdirect="row" margin="20px 0 50px 0" width="1122px">
        <Box flexdirect="column" width="561px">
          <Box flexdirect="column" height="155px">
            <Btn onClick={() => navigate("/record/write")} bgcol="#92D3F5">
              <FontAwesomeIcon icon={faPenNib} />
              <p style={{ margin: "0 10px" }}>record daily life</p>
            </Btn>
            <Btn onClick={() => navigate("/record/search")} bgcol="#F2C94C">
              <FontAwesomeIcon icon={faSearch} />
              <p style={{ margin: "0 10px" }}>search daily life</p>
            </Btn>
          </Box>
          <SubTitle>My w’s recent record!</SubTitle>
          {/* <FriendCards /> */}
          {/* {recordList
            .map((record) => (
              <FriendCards key={record.id} record={record} />
            ))} */}
          {recordList.length > 0 && <FriendCards record={recordList[0]} />}
        </Box>

        <Box flexdirect="column" width="561px">
          <SubTitle>
            <p>World of today!</p>
            <p
              style={{
                color: "#848484",
                margin: "0 15px",
                fontSize: "1.25rem",
              }}
              onClick={() => navigate("/record/search")}
            >
              + view more
            </p>
          </SubTitle>
          <TodayCards />
        </Box>
      </Box>

      <Box2 flexdirect="column" height="832px">
        {/* <ListCards />
        <ListCards />
        <ListCards />
        <ListCards />
        <ListCards /> */}
        {recordList
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(1, 6)
          .map((record) => (
            <ListCards key={record.id} record={record} />
          ))}
      </Box2>

      <Box flexdirect="column" height="832px" width="1122px">
        <SubTitle>The secret of locals!</SubTitle>
        <Box style={{ flexWrap: "wrap" }} height="750px" juscon="space-between">
          <LocalPicks />
          <LocalPicks />
          <LocalPicks />
        </Box>
        <Box style={{ flexWrap: "wrap" }} height="750px" juscon="space-between">
          <LocalPicks />
          <LocalPicks />
          <LocalPicks />
        </Box>
      </Box>
    </RecordContainer>
  );
};

export default Record;
