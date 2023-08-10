import React, { useRef } from 'react'
import { useState } from "react";
import { CommentSection } from './CommentSection';
import { BtnWrapper, Margin, PostWrapper } from '../../pages/detailPage/DetailStyle';
import Views from '../index/Views';
import Comments from '../index/Comments';
import Like from '../index/Like';
import BookMark from '../index/BookMark';

const Reaction = ({ setCommentFold }) => {
  const [isClicked,setisClicked] = useState(true);

  return (
    <>
      <PostWrapper>
        <BtnWrapper>
          <Views />
          &nbsp;
          <div onClick={() => setisClicked(isClicked ? false : true)}>
            <Comments open={isClicked} />
          </div>
        </BtnWrapper>
        <BtnWrapper>
          <Like />
          &nbsp;
          <BookMark />
        </BtnWrapper>
      </PostWrapper>
      {isClicked && <><CommentSection /><Margin /></>}
      
    </>
  );
};
export default Reaction