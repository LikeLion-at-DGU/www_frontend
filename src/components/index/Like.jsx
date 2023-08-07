import { useState } from "react";
import { LikeStyle } from "./BtnStyle";

const Like = (props) => {
  const [like, setLike] = useState(0); //백에서 받을 데이터 - 좋아요수
  const [mylike, setMylike] = useState(false);

  return (
    <LikeStyle
      handlewidth={props.handlewidth}
      handleheight={props.handleheight}
      handlefsize={props.handlefsize}
      onClick={() => setMylike(mylike ? false : true)}
    >
      {mylike ? (
        <i className="fas fa-heart"></i>
      ) : (
        <i className="far fa-heart"></i>
      )}
      &nbsp;
      {like}
    </LikeStyle>
  );
};

export default Like;
