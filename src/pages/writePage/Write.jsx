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
  TopWriteWrapper,
  SaveBtn,
} from "./WriteStyle";
import PenIMG from "../../image/pen.png";
import axios from "axios";
import { useState, useEffect, useRef, useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import MakeCard from "../../components/card/MakeCard";
import Card from "../../components/card/Card";

const Write = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("user");
  const [userInfo, setUserInfo] = useState("user info(Korea/incheon)");
  const quillRef = useRef(null);

  const handledate = (event) => {
    setDate(event.target.value);
  };
  const handleweather = (event) => {
    setWeather(event.target.value);
  };
  const handletitle = (event) => {
    setTitle(event.target.value);
  };

  // 레코드 POST
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/records", { //레코드 POST URL
        user,
        userInfo,
        date,
        weather,
        title,
        content,
      });

      console.log("Post created:", response.data);
      // 새로운 레코드 생성된 후의 동작을 수행
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  //이미지 업로드 로직
  const handleImageUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        "https://api.example.com/upload-image", //이미지 업로드를 처리하는 URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const imageUrl = response.data.url;
      const editor = this.quillRef.getEditor(); // ReactQuill의 에디터 인스턴스 가져오기
      const range = editor.getSelection();
      editor.insertEmbed(range.index, "image", imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  

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
          // [{ align: [] }, "link", "image", "custom-card"],
        ],
        handlers: {
          image: handleImageUpload, // 이미지 업로드 핸들러 연결
          /*
          "custom-card": () => {
            // 카드 업로드 핸들러 연결
            const editor = this.quillRef.getEditor(); // ReactQuill의 에디터 인스턴스 가져오기
            const range = editor.getSelection();
            editor.insertEmbed(range.index, "custom-card", true); // 커스텀 컴포넌트 삽입
          },
          */
        },
      },
      /*
      // 커스텀 모듈 정의
      "custom-card": {
        container: ".custom-card", // 커스텀 컴포넌트 렌더링할 선택자
        component: Card, // 커스텀 컴포넌트 지정
      },
      */
    };
  }, []);

  return (
    <>
      <TopWriteWrapper>
        {modalOpen && <MakeCard setModalOpen={setModalOpen} />}
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          {/* 글쓴이 , register */}
          <WriteWrapper>
            <PostWriter>
              <img src="" alt="profile" />
              <p>{user}</p>&nbsp;
              <span>{userInfo}</span>
            </PostWriter>
            <BtnWrapper>
              <SaveBtn onClick={() => setModalOpen(true)}>
                <span className="material-symbols-outlined">library_add</span>
                <p>add card</p>
              </SaveBtn>
              <RegisterBtn
                type="submit"
                onClick={() => {
                  console.log(content);
                }}
              >
                <RegisterImg src={PenIMG} alt="pen" />
                &nbsp;register
              </RegisterBtn>
            </BtnWrapper>
          </WriteWrapper>
          {/* 날짜, 날씨, 타이틀 */}
          <InputField>
            Date:{" "}
            <input type="date" name="date" value={date} onChange={handledate} />{" "}
            &nbsp; Weather:{" "}
            <input
              type="text"
              name="weather"
              value={weather}
              onChange={handleweather}
              placeholder="input weather"
            />
          </InputField>
          <TitleInput
            type="text"
            name="title"
            value={title}
            onChange={handletitle}
            placeholder="Title"
          />
          {/* 본문 */}
          <ReactQuill
            style={{ width: "100%", height: "600px", marginBottom: "60px" }}
            placeholder="Please enter the main content"
            theme="snow"
            ref={ quillRef }
            value={content}
            onChange={setContent}
            modules={modules}
          />
        </form>
      </TopWriteWrapper>
    </>
  );
};

export default Write;
