// import Comments from "../../components/index/Comments";
// import Like from "../../components/index/Like";
// import Views from "../../components/index/Views";
import { BtnBox, Comment, Content, HashTag, Img, ListCard, ListTitle, RecordImage, TagBox, Text, View } from "./RecordStyle";
import recordImg from "../../image/record1.jpg"

const ListCards = () => {
    return (
        <ListCard>
            <Text Padding="5px 2%" Height="90%">
                <ListTitle>
                    Unexpected luck!!
                    <TagBox Padding="0 2%">
                        <HashTag>#milano_restaurant</HashTag>
                        <HashTag>#milano_cafe</HashTag>
                    </TagBox>
                </ListTitle>
                <Content FontSize="16px">
                The definition of friendships between opposite genders becomes somewhat ambiguous<br />
                depending on how we interpret the term “friend”. <br />
                It is entirely possible to be friends on a casual level, engaging in common hobbies, academic...
                </Content>
                <BtnBox JusCon="space-between">
                    <View />
                    <Comment />
                    <Comment />
                    {/* <Like /> */}
                </BtnBox>
                {/* 북마크 버튼 추가 */}
            </Text>
            <Img Width="15%" Height="100%">
                <RecordImage src={recordImg} />
            </Img>
        </ListCard>
    );
};

export default ListCards;