import React, { useRef } from 'react'
import { useState } from "react";
import { CommentSection } from './CommentSection';
import { BtnWrapper, Margin, PostWrapper } from '../../pages/detailPage/DetailStyle';
import Views from '../index/Views';
import Comments from '../index/Comments';
import Like from '../index/Like';
import BookMark from '../index/BookMark';

// 조회수, 댓글, 좋아요, 북마크 컴포넌트
const Reaction = ({record_id}) => { 
  const [isClicked,setisClicked] = useState(true);

  return (
    <>
      <PostWrapper>
        <BtnWrapper>
          <Views record_id={record_id} />
          &nbsp;
          <div onClick={() => setisClicked(isClicked ? false : true)}>
            <Comments record_id={record_id} open={isClicked} />
          </div>
        </BtnWrapper>
        <BtnWrapper>
          <Like record_id={record_id} />
          &nbsp;
          <BookMark record_id={record_id} />
        </BtnWrapper>
      </PostWrapper>
      {isClicked && (
        <>
          <CommentSection record_id={record_id} />
          <Margin />
        </>
      )}
    </>
  );
};
export default Reaction