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
import { useState, useEffect } from "react";
import ListCards from "../recordPage/ListCards";
import { PostWriter } from "../writePage/WriteStyle";
import Reaction from "../../components/commentSection/Reaction";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  let params = useParams();
  console.log();
  const [commentFold, setCommentFold] = useState(true); //댓글창 닫기
  const [post, setPost] = useState({
    id: 1,
    rcommets_cnt: 2,
    title: "테스트 Title!",
    weather: "테스트 날씨 !",
    body: "<p>이게 되면.. 어떨까...</p><p>image</p><p>엉 이건 당연히 <strong>post </strong>오류 맞고</p><p>이제 전송 보내보면 되려나..</p><p>이것저것 </p><p>넣어보기</p><ol><li>짠</li><li>짠1</li><li>짠2</li></ol><img src='' alt='임시 이미지태그 삽입' />",
    created_at: "2023-08-14",
    updated_at: "2023-08-14",
    views: 13,
    likes: 5,
    writer: "sha",
    tag: ["#서울_맛집", "#룰루"],
    photos: ["testImgURL1", "testImgURL2", "testImgURL3"],
  });
  

  useEffect(() => {
    // API 요청을 수행하는 부분
    axios
      .get(`/api/records/${params.detailId}`) // 레코드 GET URL
      .then((response) => {
        setPost(response.data); // 받아온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // 빈 배열을 넣어 처음 한 번만 실행되도록 설정

  return (
    <TopWrapper>
      <DetailWrapper>
        <CenterWriter>
          <p>by</p>
          <ProfileImg></ProfileImg>
          {post.writer}
          <City>Iyaly/milano</City>
        </CenterWriter>
        <BorderBottom>
          <Wrapper>
            <PostSubTitle>Date: {post.created_at}</PostSubTitle>{" "}
            {/* <PostSubTitle>Date: 2023,3,August</PostSubTitle>{" "} */}
            <PostSubTitle>Weather: {post.weather}</PostSubTitle>
            {/* <PostSubTitle>Weather: 너무 더워</PostSubTitle> */}
          </Wrapper>
        </BorderBottom>
        <BorderBottom>
          <PostTitle>Title: {post.title}</PostTitle>
          {/* <PostTitle>Title: 리스펙트 어짜구</PostTitle> */}
        </BorderBottom>
        {/* -------본문------ */}
        <Card record_id={params.detailId} />
        <div
          dangerouslySetInnerHTML={{ __html: post.body }}
          style={{
            width: "100%",
            fontFamily: "Roboto Flex",
            fontSize: "1.5rem",
          }}
        />
        {/* 🎶1일차(2022.08.27) ​바뀐 mbti검사를 해보니 esfj가 나왔다 s랑 f는
        근소우위인데, 특징을 살펴보니 이게 맞는 것 같다🧐 ​라인업을 보고 바로
        얼리버드 양일권을 지른 나.. 주훈, 연주와 리스펙 페스티벌 1일차에 가기로
        했다.
        <Card />
        요새 샐러드랑 포케에 빠졌다.. 맛있어 대망의 콜드.. 난 콜드 빠돌이다.
        높은 지분을 차지한 콜드 형님 라이브 잘하시는걸?!?!! */}
      </DetailWrapper>
      <Reaction setCommentFold={setCommentFold} commentFold={commentFold} />
      {commentFold && <CommentSection />}

      <PostWriter>
        <img src="" alt="profile" />
        <p>{post.writer}</p>&nbsp;
        <span>Korea/incheon</span>
        <p>'s recent record!</p>
      </PostWriter>
      <Box2 flexdirect="column" height="460px">
        {/* <ListCards />
        <ListCards />
        <ListCards /> */}
        <p>리스트 카드 올 부분</p>
      </Box2>
    </TopWrapper>
  );
};

export default Detail;
