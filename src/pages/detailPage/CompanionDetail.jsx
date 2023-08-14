import React from 'react'
import { useState } from "react";
import {
  CenterWriter,
  DetailWrapper,
  TopWrapper,
  BorderBottom,
  PostSubTitle,
  PostTitle,
  CompanionBody,
  BodyGuide,
  PostWrapper,
  BtnWrapper,
  AnotherTitle,
} from "../detailPage/DetailStyle";
import { ProfileImg, City, Box2 } from "../recordPage/RecordStyle";
import { Wrapper } from '../../components/WrapStyle';
import Views from '../../components/index/Views';
import Comments from '../../components/index/Comments';
import Like from '../../components/index/Like';
import BookMark from '../../components/index/BookMark';
import Reaction from '../../components/commentSection/Reaction';
import { CommentSection } from '../../components/commentSection/CommentSection';
import { PostWriter } from '../writePage/WriteStyle';
import ListCards from '../recordPage/ListCards';
import { Link } from 'react-router-dom';
import CompanionCards from '../companionPage/CompanionCards';

export default function CompanionDetail() {
  const [commentFold, setCommentFold] = useState(true);
  const [hide, setHide] = useState(false);

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
            <PostSubTitle>Date: 9th,Sep</PostSubTitle>
            <PostSubTitle>Continent: Asia</PostSubTitle>
            <PostSubTitle>Country: vietnam</PostSubTitle>
            <PostSubTitle>City: Hanoi</PostSubTitle>
          </Wrapper>
        </BorderBottom>
        <BorderBottom>
          <PostTitle>Title: Today Hanoi nightscape!!</PostTitle>
        </BorderBottom>
        <CompanionBody>
          <BodyGuide>#Where we will meet?</BodyGuide>
          <p>Dong Kinh Nghia Thuc Square</p>
          <BodyGuide>#When we will meet?</BodyGuide>
          <p>6pm!!</p>
          <BodyGuide>#What we will do together?</BodyGuide>
          <p>
            eat dinner together and feel the atmosphere of Hanoi with nightscape
          </p>
        </CompanionBody>
      </DetailWrapper>
      <Reaction />
      {commentFold && <CommentSection />}

      <AnotherTitle>
        <p>Another buddy is Waiting you!</p>
        <Link to="/companion">
          <p>+ back to list</p>
        </Link>
      </AnotherTitle>
      <Box2 flexdirect="column" height="460px">
        <CompanionCards/>
        <CompanionCards />
        <CompanionCards />
      </Box2>
    </TopWrapper>
  );
}
