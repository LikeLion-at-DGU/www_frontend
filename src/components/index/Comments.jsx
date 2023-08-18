import { useState, useEffect } from "react";
import { BtnText, CommentStyle } from "./BtnStyle";
import axiosInstance from "../../api/axios";

const Comments = ({
  setCommentFold,
  commentFold,
  handlewidth,
  handleheight,
  handlefsize,
  record,
}) => {
  const [comments, setComments] = useState(0); //백에서 받을 데이터 - 댓글수
  
  function CommentsLength(record) {
    if (record && record.record_comments) {
      return record.record_comments.length;
    } else {
      return 0; // 만약 record 또는 record_comments가 없을 경우 0을 반환
    }
  }
    const cnt = CommentsLength(record);
    // console.log("여기: ", record);
  
  useEffect(() => {
    axiosInstance
      .get(`/api/records/${record.id}/rcomments/`)
      .then((response) => {
        let result = response.data.length;
        setComments(result);
        // console.log("댓글리스트겟", response.data);
        // console.log("겟댓글수", comments);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <CommentStyle
      handlewidth={handlewidth}
      handleheight={handleheight}
      handlefsize={handlefsize}
      onClick={() => setCommentFold(commentFold ? false : true)}
    >
      <i className="fas fa-comment-alt"></i> &nbsp;
      {/* <BtnText>{record.record_comments.length}</BtnText> &nbsp; */}
      <BtnText>{cnt}</BtnText> &nbsp;
      {commentFold ? (
        <i className="fas fa-caret-down"></i>
      ) : (
        <i className="fas fa-caret-up"></i>
      )}
    </CommentStyle>
  );
};

export default Comments;
