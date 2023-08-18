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
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { userState } from '../../context/userState';

const Write = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
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
      content,
      "where : ",
      cardInfo.where,
      "what : ",
      cardInfo.what,
      "how : ",
      cardInfo.how,
      "img : ",
      cardInfo.card_photo_1
    );
  };

  // submit 시 로직
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("cardInfo: ", cardInfo);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("weather", weather);
    formData.append("date", date);
    formData.append("body", content);
    formData.append("where", cardInfo.where);
    formData.append("what", cardInfo.what);
    formData.append("how", cardInfo.how);
    formData.append("tag_field", cardInfo.tag_field);
    formData.append("card_photo_1", cardInfo.card_photo_1);
    if (cardInfo.card_photo_2) formData.append("card_photo_2", cardInfo.card_photo_2);
    if (cardInfo.card_photo_3) formData.append("card_photo_3", cardInfo.card_photo_3);

    try {
      const accessToken = localStorage.getItem('accessToken'); // access token 가져오기
      const response = await axiosInstance.post("/api/records/", formData, {
        headers: { 
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`, // 헤더에 access token 추가
         },
      });
      console.log("Post created:", response.data);
      navigate("/records");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // quill에서 사용할 모듈
  // useMemo를 사용하여 modules가 렌더링 시 에디터가 사라지는 버그를 방지
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
        ],
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
