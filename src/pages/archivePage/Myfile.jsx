import React, { useState } from "react";
import {
  StackedImages,
  FileContainer,
  ClickableImage,
  ClickableImageContainer,
  MyRecord,
  DailyRecord,
  DataCard,
  Companions,
} from "./ArchiveStyle";
import blueMyRecord from "../../image/blueMyRecord.png";
import blueDailyRecord from "../../image/blueDailyRecord.png";
import blueDataCard from "../../image/blueDataCard.png";
import blueCompanions from "../../image/blueCompanions.png";
import whiteMyRecord from "../../image/whiteMyRecord.png";
import whiteDailyRecord from "../../image/whiteDailyRecord.png";
import whiteDataCard from "../../image/whiteDataCard.png";
import whiteCompanions from "../../image/whiteCompanions.png";

const MyFile = () => {
  return (
    <FileContainer>
      <StackedImages>
        <ClickableImageContainer>
          <ClickableImage src={blueMyRecord} alt="MyRecord" />
          <MyRecord>My Record</MyRecord>
        </ClickableImageContainer>

        <ClickableImageContainer>
          <ClickableImage src={blueDailyRecord} alt="Daily" />
          <DailyRecord>Daily Record</DailyRecord>
        </ClickableImageContainer>

        <ClickableImageContainer>
          <ClickableImage src={blueDataCard} alt="DataCard" />
          <DataCard>Data Card</DataCard>
        </ClickableImageContainer>

        <ClickableImageContainer>
          <ClickableImage src={blueCompanions} alt="Companions" />
          <Companions>Companions</Companions>
        </ClickableImageContainer>
      </StackedImages>
    </FileContainer>
  );
};

export default MyFile;
