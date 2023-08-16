import { useState, useEffect } from "react";
import { BookMarkStyle } from "./BtnStyle";
import axiosInstance from "../../api/axios";

const BookMark = ({
  record,
  handlewidth,
  handleheight,
  handlefsize,
  handleposi,
  handletop,
  handleright,
}) => {
  const [mark, setMark] = useState(false);

  //북마크 수 POST
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMark(mark ? false : true);

    try {
      const response = await axiosInstance.post(
        `/api/records/${record.id}/scrap/`
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
        handlewidth={handlewidth}
        handleheight={handleheight}
        handlefsize={handlefsize}
        handleposi={handleposi}
        handletop={handletop}
        handleright={handleright}
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
