import { useState } from "react";
import { BtnText, ViewsStyle } from "./BtnStyle";

const Views = (props) => {
  const [views, setViews] = useState(0); //백에서 받을 데이터 - 조회수

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
