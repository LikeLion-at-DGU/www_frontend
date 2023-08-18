// import { useState, useEffect } from "react";
import { CityStyle } from "./BtnStyle";

const CityName = ({result}) => {
  // const [userCityName, setUserCityName] = useState("Seoul");

  // // 백에서 받아올 데이터 예시 코드
  // useEffect(() => {
  //   fetch("/api/getUserCityName")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserCityName(data.city);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user city:", error);
  //     });
  // }, []);

  return (
    <CityStyle
    handlewidth="max-content"
    handleheight="20px"
    handlefsize="0.8rem"
    >
      {result}
    </CityStyle>
  );
}

export default CityName;
