import React, { useState, useEffect } from "react";
import { LikeStyle } from "./BtnStyle";
import axiosInstance from "../../api/axios";

const Like = ({ record, handlewidth, handleheight, handlefsize }) => {
  const [like, setLike] = useState(0);
  const [mylike, setMylike] = useState(false);

  const handleSubmit = async (event) => {
    console.log("좋아요:",record.id);
    event.preventDefault();
    setMylike((prevMylike) => !prevMylike);

    try {
      const response = await axiosInstance.post(`/api/records/${record.id}/like/`);
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
        {/* {record.rlike_count} */}
      </LikeStyle>
    </form>
  );
};

export default Like;
