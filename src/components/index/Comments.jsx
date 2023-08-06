import { useState } from "react";
import { BtnText, CommentStyle } from "./BtnStyle";

const Comments = (open) => {
  const [comments, setComments] = useState(0); //백에서 받을 데이터 - 댓글수
  const [fold, setFold] = useState(open);

  return (
    <CommentStyle onClick={() => setFold(fold ? false : true)}>
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
