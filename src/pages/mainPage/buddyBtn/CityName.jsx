// 버디리스트 CityName.jsx

import { CityStyle } from "../../../components/index/BtnStyle";

const CityName = ({result}) => {
    return (
        <CityStyle
            handlewidth="max-content"
            handleheight="29px"
            handlefsize="16px"
        >
            {result}
        </CityStyle>
    );
}

export default CityName;
