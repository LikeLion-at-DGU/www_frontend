// Write.jsx

import { PenImg } from "../../components/card/CardStyle";
import { BtnWrapper } from "../detailPage/DetailStyle";
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
  SaveBtn,
} from "./WriteStyle";
import PenIMG from "../../image/pen.png";
// import axios from 'axios';
import { useState, useEffect, useRef, useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import MakeCard from "../../components/card/MakeCard";

const Write = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState("");
  /*
  const [contentList, setContentList] = useState([]);
  const [currentContent, setCurrentContent] = useState({
    text: "",
    imageURL: "",
  });
  */

  const inputRef = useRef(null);
  const quillRef = useRef();
  
  // quill에서 사용할 모듈
  // useMemo를 사용하여 modules가 렌더링 시 에디터가 사라지는 버그를 방지
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image"],
        ],
      },
    };
  }, []);

  /*
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
  };

  const pushdata = () => {
    if (currentContent.text || currentContent.imageURL) {
      setContentList([...contentList, currentContent]);
      setCurrentContent({ text: "", imageURL: "" });
    }
  };

  useEffect(() => {
    pushdata();
  }, [currentContent.imageURL]);
*/


  return (
    <>
      <TopWriteWrapper>
        {modalOpen && <MakeCard setModalOpen={setModalOpen} />}
        <form style={{ width: "100%" }} onSubmit={e=> e.preventDefault()} >
          {/* 글쓴이 , register */}
          <WriteWrapper>
            <PostWriter>
              <img src="" alt="profile" />
              <p>smile.kmk</p>&nbsp;
              <span>Korea/incheon</span>
            </PostWriter>
            <BtnWrapper>
              <SaveBtn onClick={() => setModalOpen(true)}>
                <span className="material-symbols-outlined">library_add</span>
                <p>add card</p>
              </SaveBtn>
              <RegisterBtn type="submit" onClick={()=>{
                console.log(content);
              }}>
                <RegisterImg src={PenIMG} alt="pen" />
                &nbsp;register
              </RegisterBtn>
            </BtnWrapper>
          </WriteWrapper>
          {/* 날짜, 날씨, 타이틀 */}
          <InputField>
            Date: <input type="date" name="date" /> &nbsp; Weather:{" "}
            <input type="text" placeholder="input weather" />
          </InputField>
          <TitleInput placeholder="Title" />
          {/* 본문 */}
          <ReactQuill
            style={{ width: "100%", height: "600px", marginBottom: "60px" }}
            placeholder="Please enter the main content"
            theme="snow"
            ref={quillRef}
            value={content}
            onChange={setContent}
            modules={modules}
          />
        </form>

          {/* ---------------------------------------------------- */}
          {/* <div>
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
        </form> */}
      </TopWriteWrapper>
    </>
  );
};

export default Write;
