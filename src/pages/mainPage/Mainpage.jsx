// Mainpage.jsx

import React, { useState, useEffect } from "react";
import mainbg from "../../image/mainbg.png";
import maintext from "../../image/maintext.png";
import note from "../../image/note.png";
import {
  MainContainer,
  TextImage,
  BottomContainer,
  OneAndOnlyContainer,
  OneAndOnly,
  RecordCard,
  VoteContainer,
  Vote,
  BackgroundImage,
} from "./MainpageStyle";

const data = [
  { id: 1, nickname: "User1" },
  { id: 2, nickname: "User2" },
  { id: 3, nickname: "User3" },
  { id: 4, nickname: "User4" },
];

export const Mainpage = () => {
  return (
    <>
      <BackgroundImage src={mainbg} alt="background-image" />
      <MainContainer>
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
            <Vote></Vote>
          </VoteContainer>
        </BottomContainer>
      </MainContainer>
    </>
  );
};

export default Mainpage;
