import styled from "styled-components";
import { Image } from "./ArchiveStyle";
import blueMyRecord from "../../image/blueMyRecord.png";
import blueDaily from "../../image/blueDaily.png";
import blueDataCard from "../../image/blueDataCard.png";
import blueCompanions from "../../image/blueCompanions.png";
import skyMyRecord from "../../image/skyMyRecord.png";
import skyDaily from "../../image/skyDaily.png";
import skyDataCard from "../../image/skyDataCard.png";
import skyCompanions from "../../image/skyCompanions.png";

const MyFile = () => {
  return (
    <>
      <Image src={skyMyRecord} alt="file" />
      <Image src={blueDaily} alt="file" />
      <Image src={blueDataCard} alt="file" />
      <Image src={blueCompanions} alt="file" />
    </>
  );
};

export default MyFile;
