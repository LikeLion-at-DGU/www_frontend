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
  const [recordList, setRecordList] = useState([]);

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
          {recordList.length > 0 && (
            <FriendCards record={recordList[0]} />
          )}
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
