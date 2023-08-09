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
} from "./CardStyle";
import { SaveBtn, UproadImg } from "../../pages/writePage/WriteStyle";

const MakeCard = ({setModalOpen}) => {
  const [tag, setTag] = useState("");
  const [images, setImages] = useState([]);
  const modal = useRef();

  const handleCloseModal = (event) => {
    if (modal.current && !modal.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImages([...images, imageURL]);
    }
  };
  const openFilePicker = () => {
    document.querySelector('input[type="file"]').click();
    pushdata();
  };
  const tagHandleChange = (e) => {
    setTag(e.target.value);
  };
  return (
    <ModalContainer onClick={handleCloseModal}>
      <CardModal ref={modal}>
        <CardBorder>
          <CardWWW>WHERE: &nbsp; </CardWWW>
          <CardInput type="text" />
        </CardBorder>
        <CardBorder>
          <CardWWW>WHAT: &nbsp; </CardWWW>
          <CardInput type="text" />
        </CardBorder>
        <CardBorder>
          <CardWWW>HOW(TIPS!): &nbsp; </CardWWW>
          <CardInput type="text" />
        </CardBorder>
        <ImgCardBorder>
          <UproadImg onClick={openFilePicker}>
            <span className="material-symbols-outlined">add_a_photo</span>
            <input
              type="file"
              name="chooseFile"
              accept="image/*"
              onChange={handleImageChange}
              style={{ visibility: "hidden" }}
            />
          </UproadImg>
          {images.map((imageURL, index) => (
            <CardImg key={index} src={imageURL} alt="post img" />
          ))}
        </ImgCardBorder>
        <CardInfo>
          <Wrapper>
            <PenImg src={PenIMG} alt="pen" />
            <HashTag
              type="text"
              value={tag}
              onChange={tagHandleChange}
              placeholder="#seoul_restaurant"
            ></HashTag>
          </Wrapper>
          <SaveBtn>save</SaveBtn>
        </CardInfo>
      </CardModal>
    </ModalContainer>
  );
};
export default MakeCard;
