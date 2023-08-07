import { useState } from "react";
import { BtnText, CommentStyle } from "./BtnStyle";

const Comments = (props) => {
  const [comments, setComments] = useState(0); //백에서 받을 데이터 - 댓글수
  const [fold, setFold] = useState(props.open);

  return (
    <CommentStyle
      handlewidth={props.handlewidth}
      handleheight={props.handleheight}
      handlefsize={props.handlefsize}
      onClick={() => setFold(fold ? false : true)}
    >
      <i className="fas fa-comment-alt"></i> &nbsp;
      <BtnText>{comments}</BtnText> &nbsp;
      {fold ? (
        <i className="fas fa-caret-down"></i>
      ) : (
        <i className="fas fa-caret-up"></i>
      )}
    </CommentStyle>
  );
};

export default Comments;
