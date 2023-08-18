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

  return (
    <FriendCard onClick={() => navigate(`/records/${record.id}`)}>
      <CardBox>
        <Img width="122px" height="100%">
          {/* <Image leftradius="20px" src={recordImg} /> */}
          <Image leftradius="20px" src={record.card_photo_1} />
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
            <div
              dangerouslySetInnerHTML={{ __html: record.body.slice(0, 35) }}
            />
          </Content>
        </Text>
      </CardBox>
      <TagBox>
        {record.tag &&
          record.tag
            .slice(0, 3)
            .map((hashtag, index) => (
              <HashTag key={index}># {hashtag}</HashTag>
            ))}
      </TagBox>
    </FriendCard>
  );
};

export default FriendCards;
