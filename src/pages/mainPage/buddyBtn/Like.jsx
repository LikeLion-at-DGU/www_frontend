// 버디리스트 Like.jsx

import { LikeStyle } from "../../../components/index/BtnStyle";

const Like = ({ result }) => {
    const [mylike, setMylike] = useState(false);
    
    return (
        <form>
            <LikeStyle
                handlewidth="max-content"
                handleheight="29px"
                handlefsize="16px"
                onClick={handleSubmit}
            >
                {mylike ? (
                    <i className="fas fa-heart"></i>
                ) : (
                    <i className="far fa-heart"></i>
                )}
                &nbsp;
                {result}
            </LikeStyle>
        </form>
    );
}

export default Like;
