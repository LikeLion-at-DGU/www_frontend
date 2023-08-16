// 버디리스트 CountryName.jsx

import { CountryStyle } from "../../../components/index/BtnStyle";

const CountryName = ({result}) => {
    return (
        <CountryStyle
            handlewidth="max-content"
            handleheight="29px"
            handlefsize="16px"
        >
            {result}
        </CountryStyle>
    );
}

export default CountryName;
