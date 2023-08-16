import { useState, useEffect } from "react";
import { BtnText, ViewsStyle } from "./BtnStyle";
import axiosInstance from "../../api/axios"

const CompaViews = ({
  companion_id,
  handlewidth,
  handleheight,
  handlefsize,
}) => {
  const [views, setViews] = useState(0); //백에서 받을 데이터 - 조회수

  //조회수 GET
  useEffect(() => {
    // API 요청을 수행하는 부분
    axiosInstance
      .get(`/api/companions/${companion_id}/`)
      .then((response) => {
        setViews(response.data.views); // 받아온 데이터를 상태에 저장
        console.log("data는 : ", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // 빈 배열을 넣어 처음 한 번만 실행되도록 설정

  return (
    <ViewsStyle
      handlewidth={handlewidth}
      handleheight={handleheight}
      handlefsize={handlefsize}
    >
      <i className="far fa-eye"></i> &nbsp;
      <BtnText>{views}</BtnText>
    </ViewsStyle>
  );
};

export default CompaViews;
