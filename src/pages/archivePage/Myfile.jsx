import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import {
  FileContainer,
  StackedImages,
  ClickableImage,
  SlideContainer,
} from "./ArchiveStyle";
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
import SearchResults from "../searchPage/SearchResults";
import LocalPicks from "../recordPage/LocalPicks";
import CompanionCards from "../companionPage/CompanionCards";

// Import Swiper styles
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  SwiperDesign,
  CustomPrevButton,
  CustomNextButton,
} from "./SwiperDesign";
import { SearchResult } from "../searchPage/SearchStyle";

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
    },
    ,
    {
      id: 3,
      rcommets_cnt: 20,
      title: "테스트 Title 3!",
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
    ,
    {
      id: 4,
      rcommets_cnt: 20,
      title: "테스트 Title 4!",
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
    ,
    {
      id: 5,
      rcommets_cnt: 20,
      title: "테스트 Title 5!",
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
    ,
    {
      id: 6,
      rcommets_cnt: 20,
      title: "테스트 Title 6!",
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

  // 레코드 스크랩
  const [scrapRecord, setScrapRecord] = useState([
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
    },
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
    },
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
    },
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
    },
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
  // 레코드 스크랩 리스트
  useEffect(() => {
    axiosInstance
      .get("/api/recordlist/scrap_list/")
      .then((response) => setScrapRecord(response.data))
      .catch((error) => console.error("Error fetching record List:", error));
  }, []);

  // 로컬픽 스크랩
  const [scrapCard, setScrapCard] = useState([]);
  // 로컬픽 스크랩 리스트
  useEffect(() => {
    axiosInstance
      .get("/api/cardlist/scrap_list")
      .then((response) => setScrapCard(response.data))
      .catch((error) => console.error("Error fetching record List:", error));
  }, []);

  // 동행 스크랩
  const [companion, setCompanion] = useState([]);
  // 동행 스크랩 리스트
  useEffect(() => {
    axiosInstance
      .get("/api/companionlist/scrap_list/")
      .then((response) => setCompanion(response.data))
      .catch((error) => console.error("Error fetching record List:", error));
  }, []);

  return (
    <FileContainer>
      <StackedImages>
        {/* 스택이미지는 폴더 파란색 흰색 이미지가 쌓인 부분-승민 */}
        <ClickableImage
          src={selectedImage === "MyRecord" ? blueMyRecord : whiteMyRecord}
          alt="MyRecord"
          style={{ zIndex: selectedImage === "MyRecord" ? 2 : 0 }}
        />
        {/* 클리커블이미지는 텍스트를 눌렀을 때 이미지 색이 바뀌느 부분 - 승민 */}
        <MyRecord
          selected={selectedImage === "MyRecord"}
          onClick={() => handleTextClick("MyRecord")}
        />
        {/* 이건 그냥 마이레코드 불러오는 부분인데 사실 좀 겹치는 것 같긴 함 그치만 지울 필욘없음 여긴 문제 없음 */}

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

        {/* 여기서부터 스와이퍼를 디자인 하기 위한 부분, 
이미지가 선택됐을 때 스와이퍼 안에 콘텐츠 카드들을 넣으려고 했음
여기서 SearchResults 데이터가 안 불러와지는 중
그리고 마이레코드 데이터 불러오는 로직이 필요함 */}
        {selectedImage === "DailyRecord" &&
          scrapRecord.map((record) => {
            <SlideContainer>
              <SearchResults
                style={{ position: "absolute", zIndex: 3 }}
                record={record}
              />
            </SlideContainer>;
          })}

        {selectedImage === "DataCard" && (
          <SlideContainer>
            <LocalPicks
              style={{ position: "absolute", zIndex: 3 }}
              card={scrapCard}
            />
          </SlideContainer>
        )}

        {selectedImage === "Companions" && (
          <SlideContainer>
            <CompanionCards
              // companion={1}
              style={{ position: "absolute", zIndex: 3 }}
              companion={companion}
            />
          </SlideContainer>
        )}
      </StackedImages>
    </FileContainer>
  );
};

export default MyFile;
