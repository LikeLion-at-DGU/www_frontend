import { useState, useEffect } from "react";
import { BookMarkStyle } from "./BtnStyle";
import axios from "axios";

const BookMark = (props,{record_id}) => {
  const [mark, setMark] = useState(false);

  //북마크 수 GET
  useEffect(() => {
    // API 요청을 수행하는 부분
    axios
      .get(`/api/records/${record_id}/record_like`) // 레코드 북마크 GET URL__ API 확정 안됨
      .then((response) => {
        setMark(response.data); // 받아온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // 빈 배열을 넣어 처음 한 번만 실행되도록 설정

  //북마크 수 POST
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMark(mark ? false : true);

    try {
      const response = await axios.post(
        `/api/records/${record_id}/record_like`, // 레코드 북마크 POST URL__ API 확정 안됨
        {
          mark,
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
      <BookMarkStyle
        handlewidth={props.handlewidth}
        handleheight={props.handleheight}
        handlefsize={props.handlefsize}
        handleposi={props.handleposi}
        handletop={props.handletop}
        handleright={props.handleright}
        onClick={handleSubmit}
      >
        {mark ? (
          <i className="fas fa-bookmark"></i>
        ) : (
          <i className="far fa-bookmark"></i>
        )}
      </BookMarkStyle>
    </form>
  );
};

export default BookMark;
