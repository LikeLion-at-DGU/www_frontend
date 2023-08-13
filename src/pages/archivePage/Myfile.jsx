import React, { useState } from "react";
import { FileContainer, StackedImages, ClickableImage } from "./ArchiveStyle";
import MyRecord from "./MyRecord";
import DailyRecord from "./DailyRecord";
import DataCard from "./DataCard";
import Companions from "./Companions";
import blueMyRecord from "../../image/blueMyRecord.png";
import blueDailyRecord from "../../image/blueDailyRecord.png";
import blueDataCard from "../../image/blueDataCard.png";
import blueCompanions from "../../image/blueCompanions.png";
import whiteMyRecord from "../../image/whiteMyRecord.png";
import whiteDailyRecord from "../../image/whiteDailyRecord.png";
import whiteDataCard from "../../image/whiteDataCard.png";
import whiteCompanions from "../../image/whiteCompanions.png";
import FriendCards from "../recordPage/FriendCards";
import LocalPicks from "../recordPage/LocalPicks";
import CompanionCards from "../companionPage/CompanionCards";

const MyFile = () => {
  const [selectedImage, setSelectedImage] = useState("MyRecord");

  const handleTextClick = (text) => {
    setSelectedImage(text);
  };

  return (
    <FileContainer>
      <StackedImages>
        <ClickableImage
          src={selectedImage === "MyRecord" ? blueMyRecord : whiteMyRecord}
          alt="MyRecord"
          style={{ zIndex: selectedImage === "MyRecord" ? 2 : 0 }}
        />
        <MyRecord
          selected={selectedImage === "MyRecord"}
          onClick={() => handleTextClick("MyRecord")}
        />

        <ClickableImage
          src={
            selectedImage === "DailyRecord" ? blueDailyRecord : whiteDailyRecord
          }
          alt="Daily"
          style={{ zIndex: selectedImage === "DailyRecord" ? 2 : 0 }}
        />
        <DailyRecord
          selected={selectedImage === "DailyRecord"}
          onClick={() => handleTextClick("DailyRecord")}
        />

        <ClickableImage
          src={selectedImage === "DataCard" ? blueDataCard : whiteDataCard}
          alt="DataCard"
          style={{ zIndex: selectedImage === "DataCard" ? 2 : 0 }}
        />
        <DataCard
          selected={selectedImage === "DataCard"}
          onClick={() => handleTextClick("DataCard")}
        />

        <ClickableImage
          src={
            selectedImage === "Companions" ? blueCompanions : whiteCompanions
          }
          alt="Companions"
          style={{ zIndex: selectedImage === "Companions" ? 2 : 0 }}
        />
        <Companions
          selected={selectedImage === "Companions"}
          onClick={() => handleTextClick("Companions")}
        />

        {selectedImage === "DailyRecord" && (
          <FriendCards style={{ position: "absolute", zIndex: 3 }} />
        )}
        {selectedImage === "Companions" && (
          <CompanionCards style={{ position: "absolute", zIndex: 3 }} />
        )}
        {selectedImage === "DataCard" && (
          <LocalPicks style={{ position: "absolute", zIndex: 3 }} />
        )}
      </StackedImages>
    </FileContainer>
  );
};

export default MyFile;
