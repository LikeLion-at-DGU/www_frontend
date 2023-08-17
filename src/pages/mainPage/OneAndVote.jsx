// OneAndVote.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  OneAndVote,
  OneAndOnlyContainer,
  OneAndOnly,
  FriendData,
  Vote,
  VoteTitle,
  ExampleImage,
  VoteSubject,
  SignUp,
  CheckBox,
  CheckProperty,
} from "./MainpageStyle";
import FriendCards from "../recordPage/FriendCards";
import note from "../../image/note.png";
import axiosInstance from "../../../src/api/axios";

const data = [
  { id: 1, nickname: "User1" },
  { id: 2, nickname: "User2" },
];

const mockData = [
  { option: 1, count: 32 },
  { option: 2, count: 68 },
];

const validateAccessToken = (token) => {
  // 임의의 access 토큰 검증 로직
  return token === "validAccessToken"; // 예시에서는 단순히 문자열로 비교
};

const OneAndVoteAll = () => {
  // 레코드 리스트 불러오기 ~ ...
  // const [recordList, setRecordList] = useState([]);

  // 레코드 리스트 예시 (나중에 삭제하면 될듯)
  const [recordList, setRecordList] = useState([
    {
      id: 1,
      rcommets_cnt: 2,
      title: "테스트 Title 1!",
      weather: "테스트 날씨 1!",
      date: "2023-07-13",
      body: "테스트 본문 1!",
      created_at: "2023-07-13T08:13:09.251272Z",
      updated_at: "2023-07-13T08:13:09.251272Z",
      views: 13,
      rlike_count: 5,
      where: "1 where",
      what: "1 what",
      how: "1 how",
      tag_field: "#우와",
      card_photo_1: null,
      card_photo_2: null,
      card_photo_3: null,
      writer: "sha",
      rlike: [],
      photos: [],
      record_scrap: [],
      tag: ["#서울_맛집", "#룰루"],
      card_scrap: [],
    },
    {
      id: 2,
      rcommets_cnt: 2,
      title: "테스트 Title 2!",
      weather: "테스트 날씨 2!",
      date: "2023-07-19",
      body: "테스트 본문 2!",
      created_at: "2023-07-19T08:13:09.251272Z",
      updated_at: "2023-07-19T08:13:09.251272Z",
      views: 10,
      rlike_count: 2,
      where: "2 where",
      what: "2 what",
      how: "2 how",
      tag_field: "#우와",
      card_photo_1: null,
      card_photo_2: null,
      card_photo_3: null,
      writer: "miingkko",
      rlike: [],
      photos: [],
      record_scrap: [],
      tag: ["#서울_맛집", "#룰루2"],
      card_scrap: [],
    },
    {
      id: 3,
      rcommets_cnt: 3,
      title: "테스트 Title 3!",
      weather: "테스트 날씨 3!",
      date: "2023-07-11",
      body: "테스트 본문 3!",
      created_at: "2023-07-11T08:13:09.251272Z",
      updated_at: "2023-07-11T08:13:09.251272Z",
      views: 11,
      rlike_count: 1,
      where: "3 where",
      what: "3 what",
      how: "3 how",
      tag_field: "#우와",
      card_photo_1: null,
      card_photo_2: null,
      card_photo_3: null,
      writer: "kickcha",
      rlike: [],
      photos: [],
      record_scrap: [],
      tag: ["#서울_맛집", "#룰루3"],
      card_scrap: [],
    },
    {
      id: 4,
      rcommets_cnt: 4,
      title: "테스트 Title 4!",
      weather: "테스트 날씨 4!",
      date: "2023-08-06",
      body: "테스트 본문 4!",
      created_at: "2023-08-06T08:13:09.251272Z",
      updated_at: "2023-08-06T08:13:09.251272Z",
      views: 7,
      rlike_count: 7,
      where: "4 where",
      what: "4 what",
      how: "4 how",
      tag_field: "#우와",
      card_photo_1: null,
      card_photo_2: null,
      card_photo_3: null,
      writer: "smilekmk",
      rlike: [],
      photos: [],
      record_scrap: [],
      tag: ["#서울_맛집", "#룰루4"],
      card_scrap: [],
    },
    {
      id: 5,
      rcommets_cnt: 5,
      title: "테스트 Title 5!",
      weather: "테스트 날씨 5!",
      date: "2023-07-12",
      body: "테스트 본문 5!",
      created_at: "2023-07-12T08:13:09.251272Z",
      updated_at: "2023-07-12T08:13:09.251272Z",
      views: 8,
      rlike_count: 15,
      where: "5 where",
      what: "5 what",
      how: "5 how",
      tag_field: "#우와",
      card_photo_1: null,
      card_photo_2: null,
      card_photo_3: null,
      writer: "j_00bh",
      rlike: [],
      photos: [],
      record_scrap: [],
      tag: ["#서울_맛집", "#룰루5"],
      card_scrap: [],
    },
    {
      id: 6,
      rcommets_cnt: 6,
      title: "테스트 Title 6!",
      weather: "테스트 날씨 6!",
      date: "2023-07-13",
      body: "테스트 본문 6!",
      created_at: "2023-07-17T08:13:09.251272Z",
      updated_at: "2023-07-17T08:13:09.251272Z",
      views: 17,
      rlike_count: 0,
      where: "6 where",
      what: "6 what",
      how: "6 how",
      tag_field: "#우와",
      card_photo_1: null,
      card_photo_2: null,
      card_photo_3: null,
      writer: "seng_ho_ho",
      rlike: [],
      photos: [],
      record_scrap: [],
      tag: ["#서울_맛집", "#룰루6"],
      card_scrap: [],
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

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionId) => {
    // 임의의 access 토큰 값 (실제로는 로그인 상태에 따라 동적으로 설정해야 함)
    const accessToken = "validAccessToken"; // 로그인한 상태를 가정한 예시

    // 임의의 로그인 상태 검증
    const isLoggedIn = validateAccessToken(accessToken);

    if (!isLoggedIn) {
      console.log("User not logged in. Vote will not be recorded.");
      alert("Please log in to vote.");
      return; // 로그인하지 않은 경우 함수 종료
    }

    setSelectedOption(optionId);
  };

  const getPercentage = (count) => {
    const totalVotes = mockData.reduce(
      (total, data) => total + parseInt(data.count, 10),
      0
    );
    const percentage = totalVotes === 0 ? 0 : (count / totalVotes) * 100;
    return Math.floor(percentage);
  };

  const getBackgroundColor = (option) => {
    const percentage = getPercentage(mockData[option - 1].count);
    if (selectedOption === option) {
      return `linear-gradient(90deg, #92D3F5 ${percentage}%, #ffffff ${percentage}%)`;
    } else {
      return `linear-gradient(90deg, #848484 ${percentage}%, #D9D9D9 ${percentage}%)`;
    }
  };

  const getBackgroundStyle = (option) => {
    if (selectedOption === option) {
      return {
        background: getBackgroundColor(option),
      };
    } else if (selectedOption === null) {
      return {}; // No background style
    } else {
      return {
        background: getBackgroundColor(option),
      };
    }
  };

  return (
    <OneAndVote>
      <OneAndOnlyContainer>
        <OneAndOnly>
          <img src={note} alt="note" />
          <p>One and Only Record</p>
        </OneAndOnly>
        <FriendData>
          {/* {recordList
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(1, 6)
          .map((record) => (
            <FriendCards key={record.id} record={record} />
          ))} */}
          {recordList
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 2)
            .map((record) => (
              <FriendCards key={record.id} record={record} />
            ))}
        </FriendData>
      </OneAndOnlyContainer>

      <Vote>
        <VoteTitle># What do you think?</VoteTitle>
        <ExampleImage></ExampleImage>
        <VoteSubject>
          <p>Can men and women be friends?</p>
        </VoteSubject>
        <CheckBox>
          <CheckProperty>
            <input
              type="radio"
              name="voteOption"
              value={1}
              checked={selectedOption === 1}
              onChange={() => handleOptionChange(1)}
            />
            <p
              style={{
                ...getBackgroundStyle(1),
                color: selectedOption === 1 ? "#2E74B5" : "inherit",
              }}
            >
              Absolutely, why not?
              <span>
                {selectedOption === 1 &&
                  ` ${getPercentage(mockData[0].count).toFixed(2)}%`}
                {selectedOption === 2 &&
                  `${getPercentage(mockData[0].count).toFixed(2)}%`}
              </span>
            </p>
          </CheckProperty>
          <CheckProperty>
            <input
              type="radio"
              name="voteOption"
              value={2}
              checked={selectedOption === 2}
              onChange={() => handleOptionChange(2)}
            />
            <p
              style={{
                ...getBackgroundStyle(2),
                color: selectedOption === 2 ? "#2E74B5" : "inherit",
              }}
            >
              Never, impossible!
              <span>
                {selectedOption === 2 &&
                  `${getPercentage(mockData[1].count).toFixed(2)}%`}
                {selectedOption === 1 &&
                  `${getPercentage(mockData[1].count).toFixed(2)}%`}
              </span>
            </p>
          </CheckProperty>
        </CheckBox>
        <SignUp>
          <p>
            This content is only available to members.
            <br />
            <Link to={"/login"}>
              <span>sign up!</span>
            </Link>
          </p>
        </SignUp>
      </Vote>
    </OneAndVote>
  );
};

export default OneAndVoteAll;
