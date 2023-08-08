import { useState, useEffect } from "react";
import { DateStyle } from "./BtnStyle";

function DateName(props) {
  const [userDate, setUserDate] = useState("9th,Sep");

  // 백에서 받아올 데이터 예시 코드
  useEffect(() => {
    fetch("/api/getUserDate")
      .then((response) => response.json())
      .then((data) => {
        setUserDate(data.date);
      })
      .catch((error) => {
        console.error("Error fetching user Date:", error);
      });
  }, []);

  return (
    <DateStyle
      handlewidth={props.handlewidth}
      handleheight={props.handleheight}
      handlefsize={props.handlefsize}
    >
      {userDate}
    </DateStyle>
  );
}

export default DateName;
