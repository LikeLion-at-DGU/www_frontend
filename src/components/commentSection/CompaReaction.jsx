import React, { useRef } from 'react'
import { useState } from "react";
import { BtnWrapper, PostWrapper } from '../../pages/detailPage/DetailStyle';
import CompaViews from "../index/CompaViews";
import CompaComments from "../index/CompaComments";
import CompaLike from "../index/CompaLike";
import CompaBookMark from "../index/CompaBookMark";
import EditDeleteBtn from '../index/EditDeleteBtn';
import { HideWrapper } from '../index/BtnStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

// 조회수, 댓글, 좋아요, 북마크 컴포넌트
const CompaReaction = ({ companion_id, setCommentFold, commentFold }) => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <PostWrapper>
        <BtnWrapper>
          <CompaViews companion_id={companion_id} />
          &nbsp;
          <div onClick={() => setCommentFold(commentFold ? false : true)}>
            <CompaComments
              companion_id={companion_id}
              setCommentFold={setCommentFold}
              commentFold={commentFold}
            />
          </div>
        </BtnWrapper>
        <BtnWrapper>
          <CompaLike companion_id={companion_id} />
          &nbsp;
          {"smaile.kmk" === "smaile.kmk" ? ( //글쓴이인지 확인
            // {record_id.userNmae === "smaile.kmk" ? ( //글쓴이인지 확인
            <HideWrapper onClick={() => setHide(hide ? false : true)}>
              <FontAwesomeIcon
                icon={faEllipsisV}
                style={{
                  padding: "0 10px 10px 15px",
                  fontSize: "1.3rem",
                }}
              />
              {hide && <EditDeleteBtn />}
            </HideWrapper>
          ) : (
            <CompaBookMark companion_id={companion_id} />
          )}
        </BtnWrapper>
      </PostWrapper>
    </>
  );
};
export default CompaReaction;