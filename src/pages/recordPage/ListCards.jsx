// import Comments from "../../components/index/Comments";
// import Like from "../../components/index/Like";
// import Views from "../../components/index/Views";
import { Bookmark, BtnBox, Comment, Content, HashTag, Img, ListCard, ListTitle, RecordImage, TagBox, Text, View } from "./RecordStyle";
import recordImg from "../../image/record1.jpg"

const ListCards = () => {
    return (
        <ListCard>
            <Text Padding="10px 25px" Height="125px" Width="980px">
                <ListTitle>
                    Unexpected luck!!
                    <TagBox Padding="0 18px">
                        <HashTag>#milano_restaurant</HashTag>
                        <HashTag>#milano_cafe</HashTag>
                    </TagBox>
                </ListTitle>
                <Content FontSize="1rem">
                The definition of friendships between opposite genders becomes somewhat ambiguous<br />
                depending on how we interpret the term “friend”. <br />
                It is entirely possible to be friends on a casual level, engaging in common hobbies...
                </Content>
                <BtnBox JusCon="space-between">
                    <View />
                    <Comment />
                    <Comment />
                    {/* <Like /> */}
                </BtnBox>
                <Bookmark />
            </Text>
            <Img Width="140px" Height="140px">
                <RecordImage src={recordImg} />
            </Img>
        </ListCard>
    );
};

export default ListCards;