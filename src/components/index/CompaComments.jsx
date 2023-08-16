import { useState, useEffect } from "react";
import { BtnText, CommentStyle } from "./BtnStyle";
import axiosInstance from "../../api/axios"

const CompaComments = ({
  companion_id,
  setCommentFold,
  commentFold,
  handlewidth,
  handleheight,
  handlefsize,
}) => {
  const [comments, setComments] = useState(0); //백에서 받을 데이터 - 댓글수

  //댓글수 GET
  useEffect(() => {
    // API 요청을 수행하는 부분
    axiosInstance
      .get(`/api/companions/${companion_id}/`)
      .then((response) => {
        console.log("카운트",response.data.comments_count);
        setComments(response.data.comments_count); // 받아온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // 빈 배열을 넣어 처음 한 번만 실행되도록 설정

  return (
    <CommentStyle
      handlewidth={handlewidth}
      handleheight={handleheight}
      handlefsize={handlefsize}
      onClick={() => setCommentFold(commentFold ? false : true)}
    >
      <i className="fas fa-comment-alt"></i> &nbsp;
      <BtnText>{comments}</BtnText> &nbsp;
      {commentFold ? (
        <i className="fas fa-caret-down"></i>
      ) : (
        <i className="fas fa-caret-up"></i>
      )}
    </CommentStyle>
  );
};

export default CompaComments;
