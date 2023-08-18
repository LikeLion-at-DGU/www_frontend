// SmallViews.jsx

import { BtnText, ViewsStyle } from "../BtnStyle";

const SmallViews = ({ result, handlewidth, handleheight, handlefsize }) => {
    return (
        <ViewsStyle
            handlewidth={handlewidth}
            handleheight={handleheight}
            handlefsize={handlefsize}
        >
            <i className="far fa-eye"></i> &nbsp;
            <BtnText>{result.views}</BtnText>
        </ViewsStyle>
    );
};

export default SmallViews;
