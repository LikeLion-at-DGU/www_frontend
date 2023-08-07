import { useState } from "react";
import { FriendMarkStyle } from "./BtnStyle";

const FriendMark = (props) => {
  const [fMark, setFMark] = useState(false);

  return (
    <FriendMarkStyle
      handlewidth={props.handlewidth}
      handleheight={props.handleheight}
      onClick={() => setFMark(fMark ? false : true)}
    >
      {fMark ? "+ W" : "✓ W"}
    </FriendMarkStyle>
  );
};

export default FriendMark;
