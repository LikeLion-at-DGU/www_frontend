import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import {
  ApplyBtn,
  ApplyInput,
  Label,
  CmtBox,
  CmtLabel,
  CmtProfile,
} from "./CmtStyle";
import { Wrapper } from "../WrapStyle";
import Like from "../index/Like";
import FriendMark from "../index/FriendMark";
import Mine from "../index/Mine";
import { BtnWrapper } from "../../pages/recordPage/DetailStyle";

export const CommentSection = () => {
  const [cmt, setCmt] = useState("");
  const [cmtList, setCmtList] = useState([
    {
      profileImg: "",
      userNmae: "smaile.kmk",
      nation: "Italy/milano",
      comment: "I think it is absolutely possible.",
    },
    {
      profileImg: "",
      userNmae: "giogio222",
      nation: "Republic of Korea/seoul",
      comment: "I think it is absolutely possible????!?!?!?!",
    },
  ]);

  const cmtHandleChange = (e) => {
    setCmt(e.target.value);
  };
  const addCmtList = () =>{
    setCmtList(() => [
      ...cmtList,
      {
        profileImg: "",
        userNmae: "smaile.kmk",
        nation: "Italy/milano",
        comment: cmt,
      },
    ]);
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Label>
          <ApplyInput
            type="text"
            placeholder="Please enter a comment."
            value={cmt}
            onChange={cmtHandleChange}
          />
          <ApplyBtn onClick={addCmtList}>apply</ApplyBtn>
        </Label>
      </form>
      <p>
        <span>New</span> | <span>Most like</span>
      </p>
      <br />

      {cmtList.map((comment, idx) => (
        <CmtBox key={idx}>
          <CmtLabel>
            <Wrapper style={{alignItems: "end"}}>
              {comment.userNmae === "smaile.kmk" ? (
                <BtnWrapper>
                  <Mine />
                  <FontAwesomeIcon icon={faEllipsisV} style={{padding: "10px"}} />
                </BtnWrapper>
                ) : (
                <FriendMark />
              )}
            </Wrapper>
            <Like handlewidth={"69px"} handleheight={"32px"} />
          </CmtLabel>
          <CmtProfile>
            <img alt="profile img" src={comment.profileImg} />
            <div>
              <p>{comment.userNmae}</p>
              <span>{comment.nation}</span>
            </div>
          </CmtProfile>
          {comment.comment}
        </CmtBox>
      ))}

    </>
  );
};
