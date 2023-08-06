import { BigImage, BigTitle, City, Img, ProfileImg2, TagBox, TodayCard, Writer } from "./RecordStyle";
import recordImg from "../../image/record2.jpg"

const TodayCards = () => {
    return (
        <TodayCard>
            <Img Width="100%" Height="80%">
                <BigImage src={recordImg} />
            </Img>
            <TagBox Padding="15px" JusCon="space-between">
                <BigTitle>London life</BigTitle>
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