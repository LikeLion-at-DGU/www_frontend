import React from "react";
import { DailyRecord as DailyRecordStyle } from "./ArchiveStyle";

const DailyRecord = ({ onClick }) => {
  return <DailyRecordStyle onClick={onClick}>Daily Record</DailyRecordStyle>;
};

export default DailyRecord;
