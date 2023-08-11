import { useState, useEffect } from "react";
import { BtnText, CommentStyle } from "./BtnStyle";
import axios from "axios";

const Comments = (props, { record_id }) => {
  const [comments, setComments] = useState(0); //백에서 받을 데이터 - 댓글수
  const [fold, setFold] = useState(props.open);

  //댓글수 GET
  useEffect(() => {
    // API 요청을 수행하는 부분
    axios
      .get(`/api/records/${record_id}/record_like`) // 레코드 댓글수 GET URL__ API 확정 안됨
      .then((response) => {
        setComments(response.data); // 받아온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // 빈 배열을 넣어 처음 한 번만 실행되도록 설정

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
