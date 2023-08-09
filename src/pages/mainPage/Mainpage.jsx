import React, { useState, useEffect } from "react";
import mainbg from "../../image/mainbg.png";
import maintext from "../../image/maintext.png";
import note from "../../image/note.png";
import FriendCards from "../recordPage/FriendCards";
import LocalPicks from "../recordPage/LocalPicks";
import {
  MainContainer,
  TextImage,
  Contents,
  OneAndVote,
  OneAndOnlyContainer,
  OneAndOnly,
  FriendData,
  TravelContainer,
  Vote,
  VoteTitle,
  ExampleImage,
  VoteSubject,
  BackgroundImage,
  SignUp,
  CheckBox,
  CheckProperty,
  Local,
} from "./MainpageStyle";
import Buddy from "./Buddy";

//OneAndOnly 데이터 -- 백에서 조회수나 좋아요 수 등에 따라 두개를 불러오게 해야 함
const data = [
  { id: 1, nickname: "User1" },
  { id: 2, nickname: "User2" },
];

//임의 퍼센트 데이터 - 백에서 입력받은 % 데이터 값
const mockData = [
  { option: 1, count: 32 },
  { option: 2, count: 68 },
];

const Mainpage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };

  const getPercentage = (count) => {
    const totalVotes = mockData.reduce((total, data) => total + data.count, 0);
    const percentage = totalVotes === 0 ? 0 : (count / totalVotes) * 100;
    return Math.floor(percentage); //정수만 반환하게 하는 코드인데 적용이 안됨. 데이터 불러와서 다시 수정할 것
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

  const buddyDataArray = [
    { id: 1, text: "Data for Buddy 1" },
    { id: 2, text: "Data for Buddy 2" },
    { id: 3, text: "Data for Buddy 3" },
    { id: 4, text: "Data for Buddy 4" },
  ];

  return (
    <MainContainer>
      <BackgroundImage src={mainbg} alt="background-image" />
      <TextImage>
        <img src={maintext} alt="maintext" />
      </TextImage>
      <Contents>
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
              {/* 주제에 따라 다르게 수정할 것 */}
              <p>Can men and women be friends?</p>
            </VoteSubject>
            <CheckBox>
              {/* 2지선다 중 첫번째 */}
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
              {/* 2지 선다 중 2번째 */}
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
                {/* 링크 연결 해야 함! */}
                <span>sign up!</span>
              </p>
            </SignUp>
          </Vote>
        </OneAndVote>

        <TravelContainer>
          <p>Finding Travel buddy</p>
          {buddyDataArray.map((item, index) => (
            <Buddy
              key={item.id}
              data={item.text}
              isEven={index === 1 || index === 3}
            />
          ))}
        </TravelContainer>

        <Local>
          <p>The secret of locals!</p>
          <span>
            <LocalPicks style={{ width: "300px", height: "300px" }} />
            <LocalPicks />
            <LocalPicks />
          </span>
        </Local>
      </Contents>
    </MainContainer>
  );
};

export default Mainpage;
