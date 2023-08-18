// SmallComments2.jsx
// 레코드

import { BtnText, CommentStyle } from "../BtnStyle";

const SmallComments2 = ({ result, handlewidth, handleheight, handlefsize }) => {
    return (
        <CommentStyle
            handlewidth={handlewidth}
            handleheight={handleheight}
            handlefsize={handlefsize}
        >
            <i className="fas fa-comment-alt"></i> &nbsp;
            <BtnText>{result.rcomments_cnt}</BtnText>
        </CommentStyle>
    );
};

export default SmallComments2;
