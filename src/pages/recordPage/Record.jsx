// Record.jsx

import { Box, Box2, Btn, RecordContainer, SubTitle } from "./RecordStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faSearch } from "@fortawesome/free-solid-svg-icons";
import RecordMain from "../../image/record_main.png"
import RecordSub from "../../image/record_sub.png"
import FriendCards from "./FriendCards";
import TodayCards from "./TodayCards";
import ListCards from "./ListCards";
import LocalPicks from "./LocalPicks";
import { useNavigate } from "react-router-dom";

const Record = () => {
    const navigate = useNavigate();

  return (
    <RecordContainer>
      <p>
        <img style={{ margin: "56px 0 21px 0" }} src={RecordMain} />
        <br />
        <img src={RecordSub} />
      </p>

      <Box flexdirect="row" margin="20px 0 50px 0">
        <Box flexdirect="column">
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
          <FriendCards />
        </Box>

        <Box flexdirect="column">
          <SubTitle>
            World of today!
            <p
              style={{
                color: "#848484",
                margin: "0 15px",
                fontSize: "1.25rem",
              }}
            >
              + view more
            </p>
          </SubTitle>
          <TodayCards />
        </Box>
      </Box>

      <Box2 flexdirect="column" height="832px">
        <ListCards />
        <ListCards />
        <ListCards />
        <ListCards />
        <ListCards />
      </Box2>

      <Box flexdirect="column" height="832px">
        <SubTitle>The secret of locals!</SubTitle>
        <Box style={{ flexWrap: "wrap" }} height="750px" juscon="space-between">
          <LocalPicks />
          <LocalPicks />
          <LocalPicks />
          <LocalPicks />
          <LocalPicks />
          <LocalPicks />
        </Box>
      </Box>
    </RecordContainer>
  );
};

export default Record;
