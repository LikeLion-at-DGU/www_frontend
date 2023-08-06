import { CardBox, City, Content, FriendCard, HashTag, Img, ProfileImg, RecordImage, TagBox, Text, Title, Writer } from "./RecordStyle";
import recordImg from "../../image/record1.jpg"

const FriendCards = () => {
    return (
        <FriendCard>
            <CardBox>
                <Img Width="20%" Height="100%">
                    <RecordImage src={recordImg} />
                </Img>
                <Text>
                    <Writer>
                        <p>by</p>
                        <ProfileImg></ProfileImg>
                        giogio222
                        <City>Iyaly/milano</City>
                    </Writer>
                    <Title>Unexpected luck!!!</Title>
                    <Content>
                        The definition of friendships between opposite genders becomes somewhat ambiguous depending on how we..
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