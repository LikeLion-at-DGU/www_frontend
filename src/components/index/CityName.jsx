import { useState, useEffect } from "react";
import { CityStyle } from "./BtnStyle";

function CityName(props) {
  const [userCityName, setUserCityName] = useState("Seoul");

  // 백에서 받아올 데이터 예시 코드
  useEffect(() => {
    fetch("/api/getUserCityName")
      .then((response) => response.json())
      .then((data) => {
        setUserCityName(data.city);
      })
      .catch((error) => {
        console.error("Error fetching user city:", error);
      });
  }, []);

  return (
    <CityStyle
      handlewidth={props.handlewidth}
      handleheight={props.handleheight}
      handlefsize={props.handlefsize}
    >
      {userCityName}
    </CityStyle>
  );
}

export default CityName;
