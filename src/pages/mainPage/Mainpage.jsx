import { useState, useRef, useEffect } from "react";
import maintext from "../../image/maintext.png";
import note from "../../image/note.png";
import bird from "../../image/bird.png";
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
  TravelTitle,
  Vote,
  VoteTitle,
  ExampleImage,
  VoteSubject,
  SignUp,
  CheckBox,
  CheckProperty,
  Local,
  LocalTitle,
} from "./MainpageStyle";
import Buddy from "./Buddy";
import { Link } from "react-router-dom";

const data = [
  { id: 1, nickname: "User1" },
  { id: 2, nickname: "User2" },
];

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

  const buddyDataArray = [
    { id: 1, text: "Data for Buddy 1" },
    { id: 2, text: "Data for Buddy 2" },
    { id: 3, text: "Data for Buddy 3" },
    { id: 4, text: "Data for Buddy 4" },
  ];

  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "290px", threshold: 0 };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <MainContainer>
      <TextImage className={isInViewport ? "frame-in" : ""} ref={ref}>
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

        <TravelContainer>
          <TravelTitle>
            <img src={bird} alt="bird" />
            <p>Finding Travel buddy</p>
          </TravelTitle>
          {buddyDataArray.map((item, index) => (
            <Buddy
              key={item.id}
              data={item.text}
              isEven={index === 1 || index === 3}
            />
          ))}
        </TravelContainer>

        <Local>
          <LocalTitle>
            <img src={bird} alt="bird" />
            <p>The secret of locals!</p>
          </LocalTitle>
          <span>
            <LocalPicks />
            <LocalPicks />
            <LocalPicks />
          </span>
        </Local>
      </Contents>
    </MainContainer>
  );
};

export default Mainpage;
