// Detail.jsx

import {
  DetailWrapper,
  BorderBottom,
  BtnWrapper,
  PostWrapper,
  PostSubTitle,
  PostTitle,
  CenterWriter,
  Margin,
  TopWrapper,
} from "./DetailStyle";
import Card from "../../components/card/Card";
import { Wrapper } from "../../components/WrapStyle";
import { CommentSection } from "../../components/commentSection/CommentSection";
import BookMark from "../../components/index/BookMark";
import Comments from "../../components/index/Comments";
import Like from "../../components/index/Like";
import Views from "../../components/index/Views";
import { Writer, ProfileImg, City, Box2 } from "../recordPage/RecordStyle";
import { useState } from "react";
import ListCards from "../recordPage/ListCards";
import { PostWriter } from "../writePage/WriteStyle";
import Reaction from "../../components/commentSection/Reaction";

const Detail = () => {

  const [commentFold, setCommentFold] = useState(true);

  return (
    <TopWrapper>
      <DetailWrapper>
        <CenterWriter>
          <p>by</p>
          <ProfileImg></ProfileImg>
          giogio222
          <City>Iyaly/milano</City>
        </CenterWriter>
        <BorderBottom>
          <Wrapper>
            <PostSubTitle>Date: 2023,3,August</PostSubTitle>{" "}
            <PostSubTitle>Weather: 너무 더워</PostSubTitle>
          </Wrapper>
        </BorderBottom>
        <BorderBottom>
          <PostTitle>Title: 리스펙트 어짜구</PostTitle>
        </BorderBottom>
        <Card />
        {/* -------본문------ */}
        🎶1일차(2022.08.27) ​바뀐 mbti검사를 해보니 esfj가 나왔다 s랑 f는
        근소우위인데, 특징을 살펴보니 이게 맞는 것 같다🧐 ​라인업을 보고 바로
        얼리버드 양일권을 지른 나.. 주훈, 연주와 리스펙 페스티벌 1일차에 가기로
        했다.
        <Card />
        요새 샐러드랑 포케에 빠졌다.. 맛있어 대망의 콜드.. 난 콜드 빠돌이다.
        높은 지분을 차지한 콜드 형님 라이브 잘하시는걸?!?!!
      </DetailWrapper>
      {commentFold && <Reaction setCommentFold={setCommentFold} />}
      
      <PostWriter>
        <img src="" alt="profile" />
        <p>smile.kmk</p>&nbsp;
        <span>Korea/incheon</span>
        <p>'s recent record!</p>
      </PostWriter>
      <Box2 flexdirect="column" height="460px">
        <ListCards />
        <ListCards />
        <ListCards />
      </Box2>
    </TopWrapper>
  );
};

export default Detail;
