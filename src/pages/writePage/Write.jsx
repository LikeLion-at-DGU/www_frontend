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
import { useState, useEffect, useRef, useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import MakeCard from "../../components/card/MakeCard";
import Card from "../../components/card/Card";
import axiosInstance from "../../api/axios";

const Write = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // 개별 입력값
  const [content, setContent] = useState(""); //quill에 담기는 값
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

   //이건 axios 전, submit 테스트
  const consolecheck = () => {
    console.log(
      "date : ",
      date,
      "weather : ",
      weather,
      "title : ",
      title,
      "content : ",
      content
    );
  };
  
  // submit 시 로직
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/api/records/", {
        date: date,
        writer: 1, //글쓴이가 있냐없냐 boolean 필드 느낌임?? 여튼 1
        title: title,
        weather: weather,
        body: content,
      });
      console.log("Post created:", response.data);
      alert("포스트 성공!");
      // 새로운 레코드 생성된 후의 동작을 수행
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  /* Card 컴포넌트를 quill에 추가할 경우
  const handleCardUpload = () => {
    // 여기서 Card 컴포넌트를 content에 추가하는 작업 수행
    const cardData = {
      id: 1,
      where: "포케",
      what: "요기는 식당",
      how: "연어 먹쟈!",
      tagname: "서울_맛집",
      image: require("../../image/test.jpg"), // 이미지 경로를 적절히 수정해야 함
    };

    const newContent = `${content}<Card data=${cardData} />`;
    setContent(newContent);
  };
*/

  //이미지 업로드 로직
  /* 1번
  const handleImageUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axiosInstance.post(
        "/api/upload-image", //이미지 업로드를 처리하는 URL
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
  */
  //  2번
  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const imageUrl = await uploadImageToServer(file);
        if(imageUrl){
           setContent(
             content + `<img src="${imageUrl}" alt="uploaded image" />`
           );
        }
        // const quill = quillRef.current.getEditor();
        // const range = quill.getSelection();
        // quill.insertEmbed(range.index, "image", imageUrl);
      }
    };
  };
  // 2번과 연결된 코드
  const uploadImageToServer = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axiosInstance.post("/api/upload_image/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.url; // 백엔드에서 이미지 URL
    } catch (error) {
      console.error("Error uploading image:", error);
      // return "추가될듯";
      return null;
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
          [{ align: [] }],
          [{ align: [] }, "image"],
          // [{ align: [] }, "image", "card"],
        ],
        handlers: {
          image: handleImageUpload, // 이미지 업로드 핸들러 연결
          //   card: handleCardUpload, // 카드 업로드 핸들러 연결
        },
      },
    };
  }, []);

  return (
    <>
      <TopWriteWrapper>
        {modalOpen && <MakeCard setModalOpen={setModalOpen} record={2} />}
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
              <RegisterBtn type="submit" onClick={consolecheck}>
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
            ref={quillRef}
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
