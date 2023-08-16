import React, { useRef } from 'react'
import { useState } from "react";
import { CommentSection } from './CommentSection';
import { BtnWrapper, Margin, PostWrapper } from '../../pages/detailPage/DetailStyle';
import Views from '../index/Views';
import Comments from '../index/Comments';
import Like from '../index/Like';
import EditDeleteBtn from '../index/EditDeleteBtn';
import BookMark from '../index/BookMark';
import { HideWrapper } from '../index/BtnStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

// 조회수, 댓글, 좋아요, 북마크 컴포넌트
const Reaction = ({ record, setCommentFold, commentFold }) => {
  const [hide, setHide] = useState(false);
  console.log(record);
  return (
    <>
      <PostWrapper>
        <BtnWrapper>
          <Views record={record} />
          &nbsp;
          <div onClick={() => setCommentFold(commentFold ? false : true)}>
            <Comments
              record={record}
              setCommentFold={setCommentFold}
              commentFold={commentFold}
            />
          </div>
        </BtnWrapper>
        <BtnWrapper>
          <Like record={record} />
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
            <BookMark record={record} />
          )}
        </BtnWrapper>
      </PostWrapper>
    </>
  );
};
export default Reaction