import React, { useEffect, useState } from "react";
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

import axiosInstance from "../../../src/api/axios";

const MyFile = () => {
  const [selectedImage, setSelectedImage] = useState("MyRecord");
  // Daily Record
  const [recordList, setRecordList] = useState([
    {
      id: 1,
      rcommets_cnt: 2,
      title: "테스트 Title!",
      weather: "테스트 날씨 !",
      body: "테스트 본문 !",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 13,
      likes: 5,
      writer: "sha",
      tag: ["#서울_맛집", "#룰루"],
      photos: ["testImgURL1", "testImgURL2", "testImgURL3"],
    },
    {
      id: 2,
      rcommets_cnt: 20,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },,
    {
      id: 3,
      rcommets_cnt: 20,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },,
    {
      id: 4,
      rcommets_cnt: 20,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },,
    {
      id: 5,
      rcommets_cnt: 20,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },,
    {
      id: 6,
      rcommets_cnt: 20,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      body: "테스트 본문 2!",
      created_at: "2023-08-14",
      updated_at: "2023-08-14",
      views: 113,
      likes: 51,
      writer: "sha22",
      tag: ["#서울_맛집2", "#룰루2"],
      photos: ["2testImgURL1", "2testImgURL2", "2testImgURL3"],
    },
  ]);

  useEffect(() => {
    axiosInstance
      .get("/api/records")
      .then((response) => {
        setRecordList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


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

        {selectedImage === "DailyRecord" &&
        recordList
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .map((record) => (
            <FriendCards key={record.id} record={record}
            style={{ position: "absolute", zIndex: 3 }} />
          ))}
        {/* {selectedImage === "DailyRecord" && (
          <FriendCards style={{ position: "absolute", zIndex: 3 }} />
        )} */}
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
