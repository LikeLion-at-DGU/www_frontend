import { useState, useEffect } from "react";
import { BtnText, ViewsStyle } from "./BtnStyle";
import axiosInstance from "../../api/axios"

const Views = ({ record, handlewidth, handleheight, handlefsize }) => {
  const [views, setViews] = useState(0); //백에서 받을 데이터 - 조회수

  return (
    <ViewsStyle
      handlewidth={handlewidth}
      handleheight={handleheight}
      handlefsize={handlefsize}
    >
      <i className="far fa-eye"></i> &nbsp;
      <BtnText>{record.views}</BtnText>
      {/* <BtnText>{views}</BtnText> */}
    </ViewsStyle>
  );
};

export default Views;
