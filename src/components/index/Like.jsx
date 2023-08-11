import { useState, useEffect } from "react";
import { LikeStyle } from "./BtnStyle";
import axios from "axios";

const Like = (props, { record_id }) => {
  const [like, setLike] = useState(0); //백에서 받을 데이터 - 좋아요수
  const [mylike, setMylike] = useState(false);

  //좋아요 수 GET
  useEffect(() => {
    // API 요청을 수행하는 부분
    axios
      .get(`/api/records/${record_id}/record_like`) // 레코드 좋아요 GET URL
      .then((response) => {
        setLike(response.data); // 받아온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // 빈 배열을 넣어 처음 한 번만 실행되도록 설정

  //좋아요 수 POST
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMylike(mylike ? false : true);

    try {
      const response = await axios.post(
        `/api/records/${record_id}/record_like`, // 레코드 좋아요 POST URL__ API 확정 안됨
        {
          mylike,
        }
      );

      console.log("Post created:", response.data);
      // 새로운 레코드 생성된 후의 동작을 수행
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <form>
      <LikeStyle
        handlewidth={props.handlewidth}
        handleheight={props.handleheight}
        handlefsize={props.handlefsize}
        onClick={handleSubmit}
      >
        {mylike ? (
          <i className="fas fa-heart"></i>
        ) : (
          <i className="far fa-heart"></i>
        )}
        &nbsp;
        {like}
      </LikeStyle>
    </form>
  );
};

export default Like;
