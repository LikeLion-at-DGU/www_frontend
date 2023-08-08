// import Comments from "../../components/index/Comments";
// import Like from "../../components/index/Like";
// import Views from "../../components/index/Views";
import { BtnBox, Content, HashTag, Img, ListCard, ListTitle, RecordImage, TagBox, Text } from "./RecordStyle";
import recordImg from "../../image/record1.jpg"
import Like from "../../components/index/Like";
import Comments from "../../components/index/Comments";
import Views from "../../components/index/Views";
import BookMark from "../../components/index/BookMark";
import { useNavigate } from "react-router-dom";

const ListCards = () => {
    const navigate = useNavigate();

    return (
      <ListCard onClick={() => navigate("/record/1")}>
        <Text padding="10px 25px" height="142px" width="980px">
          <ListTitle>
            Unexpected luck!!
            <TagBox padding="0 18px">
              <HashTag>#milano_restaurant</HashTag>
              <HashTag>#milano_cafe</HashTag>
            </TagBox>
          </ListTitle>
          <Content fontSize="1rem">
            The definition of friendships between opposite genders becomes
            somewhat ambiguous
            <br />
            depending on how we interpret the term “friend”. <br />
            It is entirely possible to be friends on a casual level, engaging in
            common hobbies...
          </Content>
          <BtnBox juscon="space-between">
            <Views
              handlewidth={"43px"}
              handleheight={"18px"}
              handlefsize={"5.4px"}
            />
            <Comments
              handlewidth={"43px"}
              handleheight={"18px"}
              handlefsize={"5.4px"}
            />
            <Like
              handlewidth={"43px"}
              handleheight={"18px"}
              handlefsize={"5.4px"}
            />
          </BtnBox>
          <BookMark
            handleposi={"absolute"}
            handletop={"15px"}
            handleright={"15px"}
          />
        </Text>
        <Img width="140px" height="140px">
          <RecordImage src={recordImg} />
        </Img>
      </ListCard>
    );
};

export default ListCards;