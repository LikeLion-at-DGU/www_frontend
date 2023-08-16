// FriendsCards.jsx

import React from "react";
import {
  CardBox,
  City,
  Content,
  FriendCard,
  HashTag,
  Image,
  Img,
  ProfileImg,
  TagBox,
  Text,
  Title,
  Writer,
} from "./RecordStyle";
import recordImg from "../../image/record1.jpg";
import { useNavigate } from "react-router-dom";

const FriendCards = ({ record }) => {
  const navigate = useNavigate();
  /*//여기부터는 임의 데이터입니당 - 현아
const FriendCards = () => {
  const record = {
    id: 1,
    rcommets_cnt: 2,
    title: "테스트 Title FriendCard!",
    weather: "테스트 날씨 !",
    body: "테스트 본문 !",
    created_at: "2023-08-14",
    updated_at: "2023-08-14",
    views: 13,
    likes: 5,
    writer: "sha",
    tag: ["#서울_맛집", "#룰루"],
    photos: ["testImgURL1", "testImgURL2", "testImgURL3"],
  };
  //여기까지 임의 데이터입니당 - 현아
  */

  return (
    <FriendCard onClick={() => navigate(`/record/${record.id}`)}>
      <CardBox>
        <Img width="122px" height="100%">
          {/* <Image leftradius="20px" src={recordImg} /> */}
          <Image leftradius="20px" src={record.photos} />
        </Img>
        <Text padding="14px" width="331px">
          <Writer>
            <p>by</p>
            {/* writer의 프로필사진으로 변경해야함 */}
            <ProfileImg />
            {/* <p>giogio222</p> */}
            <p>{record.writer}</p>
            {/* writer의 국가/도시로 변경해야함 */}
            <City>Iyaly/milano</City>
          </Writer>
          <Title>{record.title}</Title>
          <Content fontSize="0.75rem">
            {/* The definition of friendships between opposite genders becomes
              somewhat ambiguous depending on how we.. */}
            {record.body}
          </Content>
        </Text>
      </CardBox>
      <TagBox>
        {/* <HashTag>#milano_restaurant</HashTag> */}
        {/* <HashTag>#milano_cafe</HashTag> */}
        {/* <HashTag>#milano_park</HashTag> */}
        {/* 해시태그 없을 시 없어져야 함 ... */}
        {record.tag &&
          record.tag
            .slice(0, 3)
            .map((hashtag, index) => <HashTag key={index}>{hashtag}</HashTag>)}
      </TagBox>
    </FriendCard>
  );
};

export default FriendCards;
