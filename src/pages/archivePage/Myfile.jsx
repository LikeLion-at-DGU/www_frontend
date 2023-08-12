import React, { useState } from "react";
import {
  FileContainer,
  StackedImages,
  ClickableImage,
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
  const [selectedImage, setSelectedImage] = useState("MyRecord"); // Set default image to blueMyRecord

  const handleTextClick = (text) => {
    if (selectedImage === text) {
      setSelectedImage(null);
    } else {
      setSelectedImage(text);
    }
  };

  return (
    <FileContainer>
      <StackedImages>
        <ClickableImage
          src={selectedImage === "MyRecord" ? blueMyRecord : whiteMyRecord}
          alt="MyRecord"
          style={{ zIndex: selectedImage === "MyRecord" ? 2 : 0 }}
        />
        <MyRecord onClick={() => handleTextClick("MyRecord")}>
          My Record
        </MyRecord>

        <ClickableImage
          src={
            selectedImage === "DailyRecord" ? blueDailyRecord : whiteDailyRecord
          }
          alt="Daily"
          style={{ zIndex: selectedImage === "DailyRecord" ? 2 : 0 }}
        />
        <DailyRecord onClick={() => handleTextClick("DailyRecord")}>
          Daily Record
        </DailyRecord>

        <ClickableImage
          src={selectedImage === "DataCard" ? blueDataCard : whiteDataCard}
          alt="DataCard"
          style={{ zIndex: selectedImage === "DataCard" ? 2 : 0 }}
        />
        <DataCard onClick={() => handleTextClick("DataCard")}>
          Data Card
        </DataCard>

        <ClickableImage
          src={
            selectedImage === "Companions" ? blueCompanions : whiteCompanions
          }
          alt="Companions"
          style={{ zIndex: selectedImage === "Companions" ? 2 : 0 }}
        />
        <Companions onClick={() => handleTextClick("Companions")}>
          Companions
        </Companions>
      </StackedImages>
    </FileContainer>
  );
};

export default MyFile;
