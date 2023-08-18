import { useState, useRef, useEffect } from "react";
import maintext from "../../image/maintext.png";
import bird from "../../image/bird.png";
import flag from "../../image/flag.png";
import LocalPicks from "../recordPage/LocalPicks";
import {
  MainContainer,
  TextImage,
  Contents,
  TravelContainer,
  TravelTitle,
  Local,
  LocalTitle,
  MobileLandingBox,
  WebRender,
} from "./MainpageStyle";
import Buddy from "./Buddy";
import OneAndVoteAll from "./OneAndVote";
import axiosInstance from "../../../src/api/axios";
import { useLocation } from "react-router-dom";

const location = useLocation();

const data = [
  { id: 1, nickname: "User1" },
  { id: 2, nickname: "User2" },
];

const handleCopyClipBoard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("클립보드에 링크가 복사되었어요.");
  } catch (err) {
    console.log(err);
  }
};

const Mainpage = ({}) => {
  // 버디리스트 담기
  const [buddyResults, setBuddyResults] = useState([]);
  // 버디리스트 불러오기
  const buddyDataArray = async () => {
    try {
      const response = await axiosInstance.get("/api/companions/");
      setBuddyResults(response.data);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    buddyDataArray();

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

  // 모바일화면 구현
  const isMobile = window.innerWidth <= 460;

  return (
    <MainContainer>
      {isMobile ? (
        // Render MobileLandingBox for mobile screens
        <>
          <MobileLandingBox />
          <div
            className="button-container"
            onClick={() =>
              handleCopyClipBoard(`${baseUrl}${location.pathname}`)
            }
          ></div>
          <p>http://likelionwww.com</p>
        </>
      ) : (
        // Render the normal content for other screen sizes
        <WebRender>
          <TextImage className={isInViewport ? "frame-in" : ""} ref={ref}>
            <img src={maintext} alt="maintext" />
          </TextImage>
          <Contents>
            <OneAndVoteAll />

            <TravelContainer>
              <TravelTitle>
                <img src={bird} alt="bird" />
                <p>Finding Travel buddy</p>
              </TravelTitle>
              {buddyResults.map((item, index) => (
                <Buddy
                  key={item.id}
                  data={item}
                  isEven={index === 1 || index === 3}
                />
              ))}
            </TravelContainer>
            <Local>
              <LocalTitle>
                <img src={flag} alt="flag" />
                <p>The secret of locals!</p>
              </LocalTitle>
              <span>
                <LocalPicks />
                <LocalPicks />
                <LocalPicks />
              </span>
            </Local>
          </Contents>
        </WebRender>
      )}
    </MainContainer>
  );
};

export default Mainpage;
