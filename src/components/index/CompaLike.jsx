import React, { useState, useEffect } from "react";
import { LikeStyle } from "./BtnStyle";
import axiosInstance from "../../api/axios";

const CompaLike = ({
  companion_id,
  handlewidth,
  handleheight,
  handlefsize,
}) => {
  const [like, setLike] = useState(0);
  const [mylike, setMylike] = useState(false);

  useEffect(() => {
    // API 요청을 수행하는 부분
    axiosInstance
      .get(`/api/companions/${companion_id}/`)
      .then((response) => {
        console.log("좋아요", response.data.like_count);
        setLike(response.data.like_count); // 받아온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [like]); // 빈 배열을 넣어 처음 한 번만 실행되도록 설정

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMylike((prevMylike) => !prevMylike);

    try {
      const response = await axiosInstance.post(
        `/api/companions/${companion_id}/like/`
      );
      console.log("Like status updated:", response.data);
      axiosInstance
        .get(`/api/companions/${companion_id}/`)
        .then((response) => {
          console.log("좋아요", response.data.like_count);
          setLike(response.data.like_count); // 받아온 데이터를 상태에 저장
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  return (
    <form>
      <LikeStyle
        type="submit"
        handlewidth={handlewidth}
        handleheight={handleheight}
        handlefsize={handlefsize}
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

export default CompaLike;
