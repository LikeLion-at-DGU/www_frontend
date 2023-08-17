import React, { useEffect, useState } from 'react'
import {
  CenterWriter,
  DetailWrapper,
  TopWrapper,
  BorderBottom,
  PostSubTitle,
  PostTitle,
  CompanionBody,
  AnotherTitle,
  Margin,
} from "../detailPage/DetailStyle";
import { ProfileImg, City, Box2 } from "../recordPage/RecordStyle";
import { Wrapper } from '../../components/WrapStyle';
import CompanionReaction from "../../components/commentSection/CompaReaction";
import { CompaCommentSection } from "../../components/commentSection/CompaCommentSection";
import { Link, useParams } from 'react-router-dom';
import CompanionCards from '../companionPage/CompanionCards';
import axiosInstance from "../../api/axios"

export default function CompanionDetail() {
  let params = useParams();
  console.log(params.detailId);
  const [data, setData] = useState({});
  const [commentFold, setCommentFold] = useState(true);
  const [hide, setHide] = useState(false);
  // 맨아래 리스트
  const [companionList, setCompanionList] = useState([]);

  useEffect(() => {
    // API 요청을 수행하는 부분
    axiosInstance
      .get(`/api/companions/${params.detailId}/`)
      .then((response) => {
        setData(response.data); // 받아온 데이터를 상태에 저장
        console.log("get : ", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // 맨아래 리스트
    axiosInstance
      .get('/api/companions/')
      .then((response) => {
        // 현재 글 빼고 보이게
        const filteredCompanions = response.data.filter(companion => companion.id !== params.detailId);
        const firstFiveCompanions = filteredCompanions.slice(0, 5);
        setCompanionList(firstFiveCompanions);
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
          {/* {data.writer} */}
          giogio222
          <City>Iyaly/milano</City>
        </CenterWriter>
        <BorderBottom>
          <Wrapper>
            <PostSubTitle>Date: {data.date}</PostSubTitle>
            {/* <PostSubTitle>Date: 9th,Sep</PostSubTitle> */}
            <PostSubTitle>Continent: {data.continent}</PostSubTitle>
            {/* <PostSubTitle>Continent: Asia</PostSubTitle> */}
            <PostSubTitle>Country: {data.country}</PostSubTitle>
            {/* <PostSubTitle>Country: vietnam</PostSubTitle> */}
            <PostSubTitle>City: {data.city}</PostSubTitle>
            {/* <PostSubTitle>City: Hanoi</PostSubTitle> */}
          </Wrapper>
        </BorderBottom>
        <BorderBottom>
          <PostTitle>Title: {data.title}</PostTitle>
          {/* <PostTitle>Title: Today Hanoi nightscape!!</PostTitle> */}
        </BorderBottom>
        <CompanionBody>
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </CompanionBody>
      </DetailWrapper>
      <CompanionReaction
        companion_id={params.detailId}
        commentFold={commentFold}
        setCommentFold={setCommentFold}
      />
      {commentFold && <CompaCommentSection companion_id={params.detailId} />}

      <Margin />
      <AnotherTitle>
        <p>Another buddy is Waiting you!</p>
        <Link to="/companions">
          <p>+ back to list</p>
        </Link>
      </AnotherTitle>
      <Box2 flexdirect="column">
      {/* height="460px" */}
        {/* <CompanionCards /> 다른 사람 글 띄우기
        <CompanionCards />
        <CompanionCards /> */}
        {companionList.map((companion) => (
          <CompanionCards key={companion.id} companion={companion} />
        ))}
      </Box2>
    </TopWrapper>
  );
}
