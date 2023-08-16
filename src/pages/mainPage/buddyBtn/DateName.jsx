// 버디리스트 DateName.jsx

import { DateStyle } from "../../../components/index/BtnStyle";

const DateName = ({result}) => {
    // 월 -> 영어로 매핑
    const monthToEng = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        0: "Oct",
        1: "Nov",
        2: "Dec",
    }
    const getMonth = (result) => {
        return monthToEng[result[6]];
    }

    return (
        <DateStyle
            handlewidth="max-content"
            handleheight="29px"
            handlefsize="16px"
        >
            {result.slice(8,10)},{getMonth(result)}
        </DateStyle>
    );
}

export default DateName;
