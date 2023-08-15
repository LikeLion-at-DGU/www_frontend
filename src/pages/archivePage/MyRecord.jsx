import React from "react";
import { MyRecord as MyRecordStyle } from "./ArchiveStyle";
import FriendCards from "../recordPage/FriendCards";

const MyRecord = ({ onClick }) => {
  return (
    <>
      <MyRecordStyle onClick={onClick}>My Record</MyRecordStyle>
      {/* <FriendCards record={record} /> */}
    </>
  );
};

export default MyRecord;
