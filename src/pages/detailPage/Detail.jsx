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
import { Writer, ProfileImg, City, Box2 } from "../recordPage/RecordStyle";
import { useState, useEffect } from "react";
import ListCards from "../recordPage/ListCards";
import { PostWriter } from "../writePage/WriteStyle";
import Reaction from "../../components/commentSection/Reaction";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axios";

const Detail = () => {
  let params = useParams();
  const [commentFold, setCommentFold] = useState(true); //댓글창 닫기
  const [post, setPost] = useState({
    id: 1,
    record_comments: [],
    card_photo_1: null,
    card_photo_2: null,
    card_photo_3: null,
    title: "d",
    weather: "좋다..",
    date: "2023-08-17",
    body: "<p>d</p>",
    created_at: "2023-08-16T16:42:48.027801Z",
    updated_at: "2023-08-16T21:51:26.891745Z",
    views: 55,
    rlike_count: 0,
    where: "수잔나의앞치마",
    what: "아메리카노",
    how: "정말맛있다",
    tag_field: "#충무로_카페",
    writer: 1,
    rlike: [],
    photos: [],
    record_scrap: [],
    tag: [1],
    card_scrap: [],
  });
  // 맨아래 리스트
  const [recordList, setRecordList] = useState([]);
  console.log(post);

  // const dateSlice = (date) => {
  //   return date.slice(0,10);
  // }

  useEffect(() => {
    // API 요청을 수행하는 부분
    axiosInstance
      .get(`/api/records/${params.detailId}/`) // 레코드 GET URL
      .then((response) => {
        setPost(response.data); // 받아온 데이터를 상태에 저장
        console.log("디테일 data댱", response.data);
        console.log("디테일 post", post);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // 맨아래 리스트
    axiosInstance
      .get('/api/records/')
      .then((response) => {
        // 현재 글 빼고 보이게
        const filteredRecords = response.data.filter(record => record.id !== parseInt(params.detailId));
        const firstFiveRecords = filteredRecords.slice(0, 5);
        setRecordList(firstFiveRecords);
      })
      .catch((error) => {
        console.error("Error fetching related data:", error);
      });
  }, [params.detailId]);
  // }, []); // 빈 배열을 넣어 처음 한 번만 실행되도록 설정

  return (
    <TopWrapper>
      <DetailWrapper>
        <CenterWriter>
          <p>by</p>
          <ProfileImg></ProfileImg>
          {/* {post.writer.nickname} */}
          {/* {post.writer} */}
          {/* <City>{post.writer.country}/{post.writer.city}</City> */}
          {/* <City>Iyaly/milano</City> */}
        </CenterWriter>
        <BorderBottom>
          <Wrapper>
            {/* <PostSubTitle>Date: {dateSlice(post.created_at)}</PostSubTitle>{" "} */}
            <PostSubTitle>Date: {post.date}</PostSubTitle>{" "}
            <PostSubTitle>Weather: {post.weather}</PostSubTitle>
            {/* <PostSubTitle>Weather: 너무 더워</PostSubTitle> */}
          </Wrapper>
        </BorderBottom>
        <BorderBottom>
          <PostTitle>Title: {post.title}</PostTitle>
          {/* <PostTitle>Title: 리스펙트 어짜구</PostTitle> */}
        </BorderBottom>
        {/* -------본문------ */}
        <Card record={post} />
        <div
          dangerouslySetInnerHTML={{ __html: post.body }}
          style={{
            width: "100%",
            fontFamily: "Roboto Flex",
            fontSize: "1.3rem",
          }}
        />
      </DetailWrapper>
      <Reaction
        record={post}
        setCommentFold={setCommentFold}
        commentFold={commentFold}
      />
      {commentFold && <CommentSection record_id={post.id} />}

      <Margin />
      <PostWriter>
        <img src="" alt="profile" />
        <p>{post.writer}</p>&nbsp;
        <span>Korea/incheon</span>
        <p>'s recent record!</p>
      </PostWriter>
      <Box2 flexdirect="column">
        {/*  height="460px" */}
        {/* <ListCards />
        <ListCards />
        <ListCards /> */}
        {/* <p>리스트 카드 올 부분</p> */}
        {recordList.map((record) => (
          <ListCards key={record.id} record={record} />
        ))}
      </Box2>
    </TopWrapper>
  );
};

export default Detail;
