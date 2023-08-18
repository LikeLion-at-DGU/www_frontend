// SmallLike2.jsx
// 레코드

import { BtnText, LikeStyle } from "../BtnStyle";

const SmallLike2 = ({ result, handlewidth, handleheight, handlefsize }) => {
    return (
        <LikeStyle
            handlewidth={handlewidth}
            handleheight={handleheight}
            handlefsize={handlefsize}
        >
            <i className="fas fa-heart"></i> &nbsp;
            <BtnText>{result.rlike_count}</BtnText>
        </LikeStyle>
    );
};

export default SmallLike2;
