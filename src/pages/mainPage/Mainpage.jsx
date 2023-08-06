import React, { useState, useEffect } from "react";
import mainbg from "../../image/mainbg.png";
import maintext from "../../image/maintext.png";
import note from "../../image/note.png";
import example from "../../image/example.png";
import {
  MainContainer,
  TextImage,
  BottomContainer,
  OneAndOnlyContainer,
  OneAndOnly,
  RecordCard,
  VoteContainer,
  Vote,
  VoteTitle,
  ExampleImage,
  VoteSubject,
  BackgroundImage,
  SignUp,
  CheckBox,
  CheckProperty,
} from "./MainpageStyle";

//OneAndOnly 데이터
const data = [
  { id: 1, nickname: "User1" },
  { id: 2, nickname: "User2" },
];

//임의 퍼센트 데이터
const mockData = [
  { option: 1, count: 42 },
  { option: 2, count: 58 },
];

const Mainpage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };

  const getPercentage = (count) => {
    const totalVotes = mockData.reduce((total, data) => total + data.count, 0);
    return totalVotes === 0 ? 0 : Math.floor((count / totalVotes) * 100);
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
    <MainContainer>
      <BackgroundImage src={mainbg} alt="background-image" />
      <TextImage>
        <img src={maintext} alt="maintext" />
      </TextImage>
      <BottomContainer>
        <OneAndOnlyContainer>
          <OneAndOnly>
            <img src={note} alt="note" />
            <p>One and Only Record</p>
          </OneAndOnly>
          {data.map((item) => (
            <RecordCard key={item.id}>
              <p>{item.nickname}</p>
            </RecordCard>
          ))}
        </OneAndOnlyContainer>
        <VoteContainer>
          <Vote>
            <VoteTitle># What do you think?</VoteTitle>
            <ExampleImage></ExampleImage>
            <VoteSubject>
              {/* 주제에 따라 다르게 수정할 것 */}
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
                <p style={getBackgroundStyle(1)}>
                  Absolutely, why not?
                  {selectedOption === 1 &&
                    ` ${getPercentage(mockData[0].count).toFixed(2)}%`}
                  {selectedOption === 2 &&
                    `${getPercentage(mockData[0].count).toFixed(2)}%`}
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
                <p style={getBackgroundStyle(2)}>
                  Never, impossible!
                  {selectedOption === 2 &&
                    `${getPercentage(mockData[1].count).toFixed(2)}%`}
                  {selectedOption === 1 &&
                    `${getPercentage(mockData[1].count).toFixed(2)}%`}
                </p>
              </CheckProperty>
            </CheckBox>
            <SignUp>
              <p>
                This content is only available to members.
                <br /> <span>sign up!</span>
              </p>
            </SignUp>
          </Vote>
        </VoteContainer>
      </BottomContainer>
    </MainContainer>
  );
};

export default Mainpage;
