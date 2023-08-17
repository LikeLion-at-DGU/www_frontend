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
import axiosInstance from "../../api/axios";

const Write = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);

  // 개별 입력값
  const [content, setContent] = useState(""); //quill에 담기는 값
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [title, setTitle] = useState("");
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
    console.log("cardInfo: ", cardInfo);

    try {
      const response = await axiosInstance.post(
        "/api/records/",
        {
          // title: "title",
          // weather: "weather",
          // date: "date",
          // writer: 1, //글쓴이가 있냐없냐 boolean 필드 느낌임?? 여튼 1
          // body: "content",
          // where: "cardInfo.where",
          // what: "cardInfo.what",
          // how: "cardInfo.how",
          // tag_field: "cardInfo.tag_field",
          // card_photo_1: cardInfo,
          // card_photo_2: cardInfo.card_photo_2 || "",
          // card_photo_3: cardInfo.card_photo_3 || "",
          title: title,
          weather: weather,
          date: date,
          writer: 1, //글쓴이가 있냐없냐 boolean 필드 느낌임?? 여튼 1
          body: content,
          where: cardInfo.where,
          what: cardInfo.what,
          how: cardInfo.how,
          tag_field: cardInfo.tag_field,
          card_photo_1: cardInfo.card_photo_1 || "",
          card_photo_2: cardInfo.card_photo_2 || "",
          card_photo_3: cardInfo.card_photo_3 || "",
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Post created:", response.data);
      alert("포스트 성공!");
      // 새로운 레코드 생성된 후의 동작을 수행
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
/*
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
*/
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
          // [{ align: [] }, "image"],
          // [{ align: [] }, "image", "card"],
        ],
        /*
        handlers: {
          image: handleImageUpload, // 이미지 업로드 핸들러 연결
          //   card: handleCardUpload, // 카드 업로드 핸들러 연결
        },
        */
      },
    };
  }, []);
  
  useEffect(() => {
    console.log(cardInfo);
  }, [cardInfo]);

  return (
    <>
      <TopWriteWrapper>
        {modalOpen && (
          <MakeCard setModalOpen={setModalOpen} setCardInfo={setCardInfo} />
        )}
        <form
          style={{ width: "100%" }}
          onSubmit={handleSubmit}
          method="post"
          enctype="multipart/form-data"
        >
          {/* 글쓴이 , register */}
          <WriteWrapper>
            <PostWriter>
              <img src="" alt="profile" />
              <p>사용자 이름 자리</p>&nbsp;
              <span>사용자 국가정보 자리</span>
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
