import React from "react";
import { DataCard as DataCardStyle } from "./ArchiveStyle";

const DataCard = ({ onClick }) => {
  return <DataCardStyle onClick={onClick}>Data Card</DataCardStyle>;
};

export default DataCard;
