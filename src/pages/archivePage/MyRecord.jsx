import React from "react";
import { MyRecord as MyRecordStyle } from "./ArchiveStyle";

const MyRecord = ({ onClick }) => {
  return <MyRecordStyle onClick={onClick}>My Record</MyRecordStyle>;
};

export default MyRecord;
