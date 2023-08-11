import React, { useState } from "react";
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
          {data.map((item) => (
            <FriendCards
              key={item.id}
              item={item}
              style={{
                marginLeft: "50px",
              }}
            />
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
