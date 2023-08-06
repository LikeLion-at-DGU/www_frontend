import { useState } from "react";
import { ApplyBtn, ApplyInput, Label } from "./CmtStyle";

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
        <span>New </span> | <span>Most like</span>
      </p>
    </>
  );
};
