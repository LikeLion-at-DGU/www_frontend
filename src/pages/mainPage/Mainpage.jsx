import React, { useState, useEffect } from "react";
import mainbg from "../../image/mainbg.png";
import maintext from "../../image/maintext.png";
import note from "../../image/note.png";
import FriendCards from "../recordPage/FriendCards";
import LocalPicks from "../recordPage/LocalPicks";
import Like from "../../components/index/Like";
import CountryName from "../../components/index/Country";
import CityName from "../../components/index/CityName";
import DateName from "../../components/index/DateName";
import {
  MainContainer,
  TextImage,
  BottomContainer,
  RecordBuddy,
  OneAndOnlyContainer,
  OneAndOnly,
  TravelContainer,
  TravelBox,
  IndexBox,
  WwwBox,
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
  Local,
} from "./MainpageStyle";
import Date from "../../components/index/DateName";

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
  const [fadeOut, setFadeOut] = useState(true); // 초기값을 true로 설정
  let textImageRef = null; // textImageRef 상태 추가
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const textImage = document.querySelector(".text-image"); // 이미지의 클래스명이 .text-image인 것으로 가정

      if (textImage) {
        const textImageTop = textImage.getBoundingClientRect().top;
        const triggerPosition = window.innerHeight * 0.4; // 뷰포트의 40%

        if (textImageTop < triggerPosition) {
          setFadeOut(false); // Fade in
        } else {
          setFadeOut(true); // Fade out
        }
      }
    };

    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const textImageTop = entry.boundingClientRect.top;
          const triggerPosition = window.innerHeight * 0.4; // 뷰포트의 40%

          if (textImageTop < triggerPosition) {
            setFadeOut(false); // Fade in
          } else {
            setFadeOut(true); // Fade out
          }
        }
      });
    }, options);

    if (textImageRef) {
      observer.observe(textImageRef);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (textImageRef) {
        observer.unobserve(textImageRef);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textImageRef]); // textImageRef를 의존성 배열로 추가

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

  return (
    <MainContainer>
      <BackgroundImage src={mainbg} alt="background-image" />
      <TextImage className="text-image" fadeOut={fadeOut}>
        <img src={maintext} alt="maintext" />
      </TextImage>
      <BottomContainer>
        <RecordBuddy>
          <OneAndOnlyContainer>
            <OneAndOnly>
              <img src={note} alt="note" />
              <p>One and Only Record</p>
            </OneAndOnly>
            <FriendCards />
            {/* {data.map((item) => (
              <RecordCard key={item.id} item={item}></RecordCard>
            ))} */}
          </OneAndOnlyContainer>
          <TravelContainer>
            <p>Travel buddy?</p>
            <TravelBox>
              <IndexBox>
                <WwwBox>
                  <DateName handlefsize={"14px"} />
                  <CountryName handlefsize={"14px"} />
                  <CityName handlefsize={"14px"} />
                </WwwBox>
                <Like
                  handlewidth={"43px"}
                  handleheight={"24px"}
                  handlefsize={"14px"}
                />
              </IndexBox>
              <span>Today Hanoi nightscape!!</span>
            </TravelBox>
          </TravelContainer>
        </RecordBuddy>
        <VoteContainer>
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
        </VoteContainer>
      </BottomContainer>
      <Local>
        <p>The secret of locals!</p>
        <span>
          <LocalPicks />
          <LocalPicks />
          <LocalPicks />
        </span>
      </Local>
    </MainContainer>
  );
};

export default Mainpage;
