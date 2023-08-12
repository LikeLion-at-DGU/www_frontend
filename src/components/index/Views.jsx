import { useState, useEffect } from "react";
import { BtnText, ViewsStyle } from "./BtnStyle";
import axios from "axios";

const Views = (props, { record_id }) => {
  const [views, setViews] = useState(0); //백에서 받을 데이터 - 조회수

  //조회수 GET
  useEffect(() => {
    // API 요청을 수행하는 부분
    axios
      .get(`/api/records/${record_id}`) // 레코드 조회수 GET URL
      .then((response) => {
        setViews(response.data); // 받아온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // 빈 배열을 넣어 처음 한 번만 실행되도록 설정

  return (
    <ViewsStyle
      handlewidth={props.handlewidth}
      handleheight={props.handleheight}
      handlefsize={props.handlefsize}
    >
      <i className="far fa-eye"></i> &nbsp;
      <BtnText>{views}</BtnText>
    </ViewsStyle>
  );
};

export default Views;
