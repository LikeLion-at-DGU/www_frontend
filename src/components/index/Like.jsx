import React, { useState, useEffect } from "react";
import { LikeStyle } from "./BtnStyle";
import axiosInstance from "../../api/axios";

const Like = ({ record_id, handlewidth, handleheight, handlefsize }) => {
  const [like, setLike] = useState(0);
  const [mylike, setMylike] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`/api/records/1/record_like`)
      // .get(`/api/records/${record_id}/record_like`)
      .then((response) => {
        setLike(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMylike((prevMylike) => !prevMylike);

    try {
      const response = await axiosInstance.post(
        //백에서 post 방식을 사용할지 의논 필요(현재 get 방식)
        `/api/records/${record_id}/record_like`,
        {
          mylike: !mylike,
        }
      );

      console.log("Like status updated:", response.data);
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

export default Like;
