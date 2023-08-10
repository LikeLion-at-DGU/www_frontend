// Write.jsx

import { PenImg } from "../../components/card/CardStyle";
import { BtnWrapper } from "../recordPage/DetailStyle";
import {
  RegisterBtn,
  RegisterImg,
  PostWriter,
  WriteWrapper,
  InputField,
  TitleInput,
  WriteBody,
  UproadImg,
  AddCardBtn,
  TopWriteWrapper,
  BodySection,
} from "./WriteStyle";
import PenIMG from "../../image/pen.png";
// import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import MakeCard from "../../components/card/MakeCard";

const Write = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [contentList, setContentList] = useState([]);
  const [currentContent, setCurrentContent] = useState({
    text: "",
    imageURL: "",
  });
   const inputRef = useRef(null);

   const handleBodySectionClick = () => {
     inputRef.current.focus();
   };

  const handleTextChange = (event) => {
    setCurrentContent({ ...currentContent, text: event.target.value });
  };

  const handleImageChange = (event) => {
    const imageURL = URL.createObjectURL(event.target.files[0]);
    setCurrentContent({ ...currentContent, imageURL });
  };

  const openFilePicker = () => {
    document.querySelector('input[type="file"]').click();
    pushdata();
  }

    const pushdata = () =>{
    if (currentContent.text || currentContent.imageURL) {
      setContentList([...contentList, currentContent]);
      setCurrentContent({ text: "", imageURL: "" });
    }
  };

  useEffect(() => {
    pushdata();
  }, [currentContent.imageURL]);

  return (
    <>
      <TopWriteWrapper>
        {modalOpen && <MakeCard setModalOpen={setModalOpen} />}
        <form style={{ width: "100%" }}>
          <WriteWrapper>
            <PostWriter>
              <img src="" alt="profile" />
              <p>smile.kmk</p>&nbsp;
              <span>Korea/incheon</span>
            </PostWriter>
            <BtnWrapper>
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
              <AddCardBtn onClick={() => setModalOpen(true)}>
                <span className="material-symbols-outlined">library_add</span>
                <p>add card</p>
              </AddCardBtn>
              <RegisterBtn>
                <RegisterImg src={PenIMG} alt="pen" />
                &nbsp;register
              </RegisterBtn>
            </BtnWrapper>
          </WriteWrapper>
          <InputField>
            Date: <input type="date" name="date" /> &nbsp; Weather:{" "}
            <input type="text" placeholder="input weather" />
          </InputField>
          <TitleInput placeholder="Title" />
          {/* ---------------------------------------------------- */}
          <div>
            {contentList.map((content, index) => (
              <div
                key={index}
                // contenteditable="true"
              >
                {content.text && <p>{content.text}</p>}
                {content.imageURL && (
                  <img
                    src={content.imageURL}
                    alt={`이미지 ${index + 1}`}
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      margin: "5px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <BodySection onClick={handleBodySectionClick}>
            <WriteBody
              ref={inputRef}
              value={currentContent.text}
              onChange={handleTextChange}
              // placeholder="Please enter the main content."
            />
          </BodySection>
        </form>
      </TopWriteWrapper>
    </>
  );
};

export default Write;
