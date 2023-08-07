// import recordImg from "../../image/record2.jpg"

import { HashTag, Img, InTagBox, LocalPick, RecordImage, TagBox } from "./RecordStyle";
import recordImg from "../../image/record3.png"

const LocalPicks = () => {
    return (
        <LocalPick>
            <Img width="357px" height="334px">
                <RecordImage radius="20px" src={recordImg} />
                <InTagBox>
                    <HashTag>#london_restaurant</HashTag>
                </InTagBox>
            </Img>
        </LocalPick>
    );
};

export default LocalPicks;