import { useState, useEffect } from "react";
import { CountryStyle } from "./BtnStyle";

function CountryName(props) {
  const [userCountryName, setUserCountryName] = useState("Korea");

  // 백에서 받아올 데이터 예시 코드
  useEffect(() => {
    fetch("/api/getUserCountry")
      .then((response) => response.json())
      .then((data) => {
        setUserCountryName(data.country);
      })
      .catch((error) => {
        console.error("Error fetching user country:", error);
      });
  }, []);

  return (
    <CountryStyle
      handlewidth={props.handlewidth}
      handleheight={props.handleheight}
      handlefsize={props.handlefsize}
    >
      {userCountryName}
    </CountryStyle>
  );
}

export default CountryName;
