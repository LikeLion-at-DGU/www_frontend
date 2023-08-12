import { CardBox, City, Content, FriendCard, HashTag, Image, Img, ProfileImg, TagBox, Text, Title, Writer } from "./RecordStyle";
import recordImg from "../../image/record1.jpg"
import { useNavigate } from "react-router-dom";

const FriendCards = () => {
    const navigate = useNavigate();

    return (
      <FriendCard onClick={() => navigate("/record/1")}>
        <CardBox>
          <Img width="122px" height="100%">
            <Image leftradius="20px" src={recordImg} />
          </Img>
          <Text padding="14px" width="331px">
            <Writer>
              <p>by</p>
              <ProfileImg />
              <p>giogio222</p>
              <City>Iyaly/milano</City>
            </Writer>
            <Title>Unexpected luck!!!</Title>
            <Content fontSize="0.75rem">
              The definition of friendships between opposite genders becomes
              somewhat ambiguous depending on how we..
            </Content>
          </Text>
        </CardBox>
        <TagBox>
          <HashTag>#milano_restaurant</HashTag>
          <HashTag>#milano_cafe</HashTag>
          <HashTag>#milano_park</HashTag>
        </TagBox>
      </FriendCard>
    );
};

export default FriendCards;