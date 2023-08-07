// Detail.jsx

import {
  DetailWrapper,BorderBottom,BtnWrapper,
  PostWrapper,
  PostSubTitle,
  PostTitle,
} from "./DetailStyle";
import Card from "../../components/card/Card";
import { Wrapper } from "../../components/WrapStyle";
import { CommentSection } from "../../components/commentSection/CommentSection";
import BookMark from "../../components/index/BookMark";
import Comments from "../../components/index/Comments";
import Like from "../../components/index/Like";
import Views from "../../components/index/Views";
import { Writer, ProfileImg, City } from "./RecordStyle";
import { useState } from "react";

const Detail = () => {

  const [commentFold,setCommentFold] = useState(true);

  return (
    <div style={{ margin: "30px" }}>
      <DetailWrapper>
        <BorderBottom>
          <Writer>
            <p>by</p>
            <ProfileImg></ProfileImg>
            giogio222
            <City>Iyaly/milano</City>
          </Writer>
        </BorderBottom>
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
      <PostWrapper>
        <BtnWrapper>
          <Views />
          &nbsp;
          <div onClick={() => setCommentFold(commentFold ? false : true)}>
            <Comments open={commentFold} />
          </div>
        </BtnWrapper>
        <BtnWrapper>
          <Like />
          &nbsp;
          <BookMark />
        </BtnWrapper>
      </PostWrapper>
      {commentFold ? <CommentSection /> : ""}
    </div>
  );
};

export default Detail;
