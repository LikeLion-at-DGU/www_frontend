// import { useState, useEffect } from "react";
import { DateStyle } from "./BtnStyle";

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


  // const [userDate, setUserDate] = useState("9th,Sep");

  // // 백에서 받아올 데이터 예시 코드
  // useEffect(() => {
  //   fetch("/api/getUserDate")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserDate(data.date);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user Date:", error);
  //     });
  // }, []);

  return (
    <DateStyle
    handlewidth="max-content"
    handleheight="20px"
    handlefsize="0.8rem"
    >
      {result.slice(8,10)},{getMonth(result)}
    </DateStyle>
  );
}

export default DateName;
