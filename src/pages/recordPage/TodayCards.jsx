import { BigImage, City, Img, ProfileImg2, TagBox, TodayCard, TodayTitle, Writer } from "./RecordStyle";
import recordImg from "../../image/record2.jpg"

const TodayCards = () => {
    return (
        <TodayCard>
            <Img Width="100%" Height="262px">
                <BigImage src={recordImg} />
            </Img>
            <TagBox Padding="18px" JusCon="space-between">
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