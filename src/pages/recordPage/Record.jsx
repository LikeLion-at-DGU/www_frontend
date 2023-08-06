// Record.jsx

import { Box, Btn, BtnShadow, RecordContainer, SubTitle } from "./RecordStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faSearch } from "@fortawesome/free-solid-svg-icons";
import FriendCards from "./FriendCards";
import TodayCards from "./TodayCards";

const Record = () => {
  return (
    <RecordContainer>
      <p>
        Title
        <br />
        설명글
      </p>
      <Box FlexDirect="row" Height="388px">
        <Box FlexDirect="column">
          <Btn BgColor="#92D3F5">
            <FontAwesomeIcon icon={faPenNib} />
            <p style={{ margin: "0 10px" }}>record daily life</p>
            <BtnShadow />
          </Btn>
          <Btn BgColor="#F2C94C">
            <FontAwesomeIcon icon={faSearch} />
            <p style={{ margin: "0 10px" }}>search daily life</p>
            <BtnShadow />
          </Btn>
          <SubTitle>My w’s recent record!</SubTitle>
          <FriendCards />
        </Box>
        <Box FlexDirect="column">
          <SubTitle>
            World of today!
            <p style={
              {
                color: "#848484",
                margin: "0 15px",
                fontSize: "20px"
              }
            }>
              + view more
            </p>
          </SubTitle>
          <TodayCards />
        </Box>
      </Box>
      <Box>친구 최근글 나열</Box>
      <Box>secrets of local</Box>
    </RecordContainer>
  );
};

export default Record;
