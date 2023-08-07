import { BigImage, City, Img, ProfileImg2, TagBox, TodayCard, TodayTitle, Writer } from "./RecordStyle";
import recordImg from "../../image/record2.jpg"

const TodayCards = () => {
    return (
        <TodayCard>
            <Img width="100%" height="262px">
                <BigImage src={recordImg} />
            </Img>
            <TagBox padding="18px" juscon="space-between">
                <TodayTitle>London life</TodayTitle>
                <Writer>
                    <p>by</p>
                    <ProfileImg2></ProfileImg2>
                    harry.lena
                    <City>England/london</City>
                </Writer>
            </TagBox>
        </TodayCard>
    );
};

export default TodayCards;