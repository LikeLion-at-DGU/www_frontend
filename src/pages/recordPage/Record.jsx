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
  const [local, setLocal] = useState([
    {
      where: "김강민",
      what: "김강민",
      how: "김강민",
      tag_field: "김강민",
      tag: [],
      card_photo_1: null,
      card_photo_2: null,
      card_photo_3: null,
      card_scrap: [],
    },
    {
      where: "수잔나의앞치마",
      what: "아메리카노",
      how: "정말맛있다",
      tag_field: "#충무로_카페",
      tag: ["충무로_카페"],
      card_photo_1: null,
      card_photo_2: null,
      card_photo_3: null,
      card_scrap: [],
    },
  ]);
  // const [local, setLocal] = useState([])
  const [recordList, setRecordList] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/api/records/")
      .then((response) => {
        let result = response.data;
        setRecordList(result);
        // console.log("data", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .get("/api/card/")
      .then((response) => {
        let result = response.data;
        setLocal(result);
        // console.log("로컬픽", response.data);
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
            <Btn onClick={() => navigate("/records/write")} bgcol="#92D3F5">
              <FontAwesomeIcon icon={faPenNib} />
              <p style={{ margin: "0 10px" }}>record daily life</p>
            </Btn>
            <Btn onClick={() => navigate("/records/search")} bgcol="#F2C94C">
              <FontAwesomeIcon icon={faSearch} />
              <p style={{ margin: "0 10px" }}>search daily life</p>
            </Btn>
          </Box>
          <SubTitle>My&nbsp;<p style={{ fontFamily: "Bungee Shade" }}>W</p>&nbsp;’s recent record!</SubTitle>
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
              onClick={() => navigate("/records/search")}
            >
              + view more
            </p>
          </SubTitle>
          <TodayCards />
        </Box>
      </Box>

      <Box2 flexdirect="column" height="832px">
        {recordList
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(1, Math.min(recordList.length, 6))
          .map((record) => (
            <ListCards key={record.id} record={record} />
          ))}
      </Box2>

      <Box flexdirect="column" height="832px" width="1122px">
        <SubTitle>The secret of locals!</SubTitle>
        <Box style={{ flexWrap: "wrap" }} height="750px" juscon="space-between">
          {/* <LocalPicks data={local[0]}/> */}
          {/* <LocalPicks data={local[1]}/> */}
          {/* <LocalPicks data={local[2]}/> */}
          {local
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((result) => (
            <LocalPicks key={result.id} data={result} />
          ))}
        </Box>
      </Box>
    </RecordContainer>
  );
};

export default Record;
