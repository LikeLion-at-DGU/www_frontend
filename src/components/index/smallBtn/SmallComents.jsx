// SmallComments.jsx

import { BtnText, CommentStyle } from "../BtnStyle";

const SmallComments = ({ result, handlewidth, handleheight, handlefsize }) => {
    return (
        <CommentStyle
            handlewidth={handlewidth}
            handleheight={handleheight}
            handlefsize={handlefsize}
        >
            <i className="fas fa-comment-alt"></i> &nbsp;
            <BtnText>{result.comments_count}</BtnText>
        </CommentStyle>
    );
};

export default SmallComments;
