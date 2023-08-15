// Card.jsx

import { Wrapper } from "../WrapStyle";
import { useState, useRef } from "react";
import TestIMG from "../../image/test.jpg";
import PenIMG from "../../image/pen.png";
import BookMark from "../index/BookMark";
import {
  CardBorder,
  CardWWW,
  ImgCardBorder,
  CardInput,
  CardInfo,
  CardModal,
  CardImg,
  HashTag,
  PenImg,
  ModalContainer,
  CardSubmit,
} from "./CardStyle";
import { SaveBtn, UproadImg } from "../../pages/writePage/WriteStyle";
import axiosInstance from "../../api/axios";

const MakeCard = ({ setModalOpen }) => {
  // const MakeCard = ({ setModalOpen, record }) => {
  const [images, setImages] = useState([]);
  const [where, setWhere] = useState("");
  const [what, setWhat] = useState("");
  const [how, setHow] = useState("");
  const [tag, setTag] = useState("");
  const modal = useRef();

  // .record_cards => id,record,where,what,how,card_photo_1,2,3,tag,tag_field

  // 모달창 닫기
  const handleCloseModal = (event) => {
    if (modal.current && !modal.current.contains(event.target)) {
      setModalOpen(false);
    }
  };
  // 카드 내 이미지 처리
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log("file은 이거야.. ",file);
    if (file) {
      // const imageURL = URL.createObjectURL(file);
      // console.log("imageURL 이거야.. ", imageURL);
      // setImages([...images, imageURL]);
      setImages([...images, file]);
    }
    console.log("images은 이거야.. ", images);
  };
  // 이미지 업로드 스타일 변경
  const openFilePicker = () => {
    document.querySelector('input[type="file"]').click();
  };

  // submit 시 로직
  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axiosInstance.post(
    //     "/api/records/2/cards/",
    //     // `/api/records/${record}/cards/`,
    //     {
    //       where: where,
    //       what: what,
    //       how: how,
    //       tag_field: tag,
    //       card_photo_1: images[0],
    //       // card_photo_2: images[1],
    //       // card_photo_3: images[2],
    //       record: 2
    //     }
    //   );
    try {
      const formData = new FormData();
      formData.append("where", where);
      formData.append("what", what);
      formData.append("how", how);
      formData.append("tag_field", tag);
      formData.append("record", "2"); // 문자열로 전달

      if (images.length > 0) {
        formData.append("card_photo_1", images[0]);
      }

      const response = await axiosInstance.post(
        "/api/records/2/cards/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // 필수 설정
          },
        }
      );
      /*
      const response = await axiosInstance.post(
        "/api/records/2/cards/",
        formData
      );
      */
      console.log("카드 post 성공:", response.data);
      alert("카드 post 성공");
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };

  return (
    <ModalContainer onClick={handleCloseModal}>
      <form onSubmit={handleSubmit}>
        <CardModal ref={modal}>
          <CardBorder>
            <CardWWW>WHERE: &nbsp; </CardWWW>
            <CardInput
              type="text"
              name="where"
              value={where}
              onChange={(e) => setWhere(e.target.value)}
            />
          </CardBorder>
          <CardBorder>
            <CardWWW>WHAT: &nbsp; </CardWWW>
            <CardInput
              type="text"
              name="what"
              value={what}
              onChange={(e) => setWhat(e.target.value)}
            />
          </CardBorder>
          <CardBorder>
            <CardWWW>HOW(TIPS!): &nbsp; </CardWWW>
            <CardInput
              type="text"
              name="how"
              value={how}
              onChange={(e) => setHow(e.target.value)}
            />
          </CardBorder>
          <ImgCardBorder>
            <UproadImg onClick={openFilePicker}>
              <span className="material-symbols-outlined">add_a_photo</span>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                style={{ visibility: "hidden" }}
              />
            </UproadImg>
            {images.slice(0, 3).map((imageURL, index) => (
              <CardImg key={index} src={imageURL} alt="post img" />
            ))}
          </ImgCardBorder>
          <CardInfo>
            <Wrapper>
              <PenImg src={PenIMG} alt="pen" />
              <HashTag
                type="text"
                name="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="#seoul_restaurant"
              ></HashTag>
            </Wrapper>
            <CardSubmit type="submit">
              {/* <CardSubmit type="submit" onClick={() => setModalOpen(false)}> */}
              save
            </CardSubmit>
          </CardInfo>
        </CardModal>
      </form>
    </ModalContainer>
  );
};
export default MakeCard;
