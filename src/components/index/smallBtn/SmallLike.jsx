// SmallLike.jsx

import { BtnText, LikeStyle } from "../BtnStyle";

const SmallLike = ({ result, handlewidth, handleheight, handlefsize }) => {
    return (
        <LikeStyle
            handlewidth={handlewidth}
            handleheight={handleheight}
            handlefsize={handlefsize}
        >
            <i className="fas fa-heart"></i> &nbsp;
            {/* <BtnText>{result.like_count}</BtnText> */}
        </LikeStyle>
    );
};

export default SmallLike;
