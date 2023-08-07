import { useState } from "react";
import { ApplyBtn, ApplyInput, Label, CmtBox, CmtLabel } from "./CmtStyle";
import { Writer, ProfileImg, City } from "../../pages/recordPage/RecordStyle";
import { Wrapper } from "../WrapStyle";
import Like from "../index/Like";
import FriendMark from "../index/FriendMark";
import Mine from "../index/Mine";

export const CommentSection = () => {
  const [cmt, setCmt] = useState("");
  const cmtHandleChange = (e) => {
    setCmt(e.target.value);
  };
  return (
    <>
      <form>
        <Label>
          <ApplyInput
            type="text"
            placeholder="Please enter a comment."
            value={cmt}
            onChange={cmtHandleChange}
          />
          <ApplyBtn>apply</ApplyBtn>
        </Label>
      </form>
      <p>
        <span>New</span> | <span>Most like</span>
      </p>

      <CmtBox>
        <CmtLabel>
          <Wrapper>
            <FriendMark />
          </Wrapper>
          <Like handlewidth={"69px"} handleheight={"32px"} />
        </CmtLabel>
        <Wrapper>
          <img width={"40px"} height={"40px"} />
          <div>
            <p>giogio222</p>
            <p>Iyaly/milano</p>
          </div>
        </Wrapper>
        I think it is absolutely possible.
      </CmtBox>
      <CmtBox>
        <CmtLabel>
          <Wrapper>
            <Mine />
          </Wrapper>
          <Like handlewidth={"69px"} handleheight={"32px"} />
        </CmtLabel>
        <Wrapper>
          <img width={"40px"} height={"40px"} />
          <div>
            <p>giogio222</p>
            <p>Iyaly/milano</p>
          </div>
        </Wrapper>
        I think it is absolutely possible.
      </CmtBox>
    </>
  );
};
