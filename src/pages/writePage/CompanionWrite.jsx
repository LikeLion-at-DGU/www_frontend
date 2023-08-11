import React from "react";
import { PenImg } from "../../components/card/CardStyle";
import { BtnWrapper } from "../detailPage/DetailStyle";
import {
  RegisterBtn,
  RegisterImg,
  PostWriter,
  WriteWrapper,
  TitleInput,
  UproadImg,
  TopWriteWrapper,
  Table,
  ReadOnly,
  InputData,
} from "./WriteStyle";
import PenIMG from "../../image/pen.png";
// import axios from 'axios';
import { useState, useRef, useMemo } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";

const CompanionWrite = () => {
  const dateRef = useRef();
  const quillRef = useRef();

  const [user, setUser] = useState("user");
  const [userInfo, setUserInfo] = useState("user info(Korea/incheon)");
  const [date, setDate] = useState("");
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [content, setContent] =
    useState(`Necessary information!(Please write buttom questions.)<br/>
#Where we will meet?<br/><br/><br/>
#When we will meet?<br/><br/><br/>            
#What we will do together?<br/><br/>.`);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleContinentChange = (event) => {
    setContinent(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  // 동행 글 POST
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/records", {
        //동행글 POST URL __확정 안됨
        user,
        userInfo,
        date,
        continent,
        country,
        city,
        content,
      });

      console.log("Post created:", response.data);
      // 새로운 레코드 생성된 후의 동작을 수행
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
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image"],
        ],
      },
    };
  }, []);

  return (
    <>
      <TopWriteWrapper>
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <WriteWrapper>
            <PostWriter>
              <img src="" alt="profile" />
              <p>smile.kmk</p>&nbsp;
              <span>Korea/incheon</span>
            </PostWriter>
            <BtnWrapper>
              <RegisterBtn
                type="submit"
                onClick={() => {
                  console.log(
                    "date : ",
                    date,
                    "continent : ",
                    continent,
                    "country : ",
                    country,
                    "city : ",
                    city,
                    "content : ",
                    content
                  );
                }}
              >
                <RegisterImg src={PenIMG} alt="pen" />
                &nbsp;register
              </RegisterBtn>
            </BtnWrapper>
          </WriteWrapper>
          <Table>
            <tbody>
              <tr>
                <td>Date: </td>
                <td>
                  <input
                    ref={dateRef}
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleDateChange}
                  />
                </td>
                <td>Continent: </td>
                <td>
                  <select
                    name="continent"
                    value={continent}
                    onChange={handleContinentChange}
                  >
                    <option value="none">--continent--</option>
                    <option value="asia">Asia</option>
                    <option value="asia">Asia</option>
                    <option value="asia">Asia</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>
                  <select
                    name="country"
                    value={country}
                    onChange={handleCountryChange}
                  >
                    <option value="none">--country--</option>
                    <option value="republic of korea">republic of korea</option>
                    <option value="republic of korea">republic of korea</option>
                  </select>
                </td>
                <td>City: </td>
                <td>
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={handleCityChange}
                    placeholder="--city--"
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <TitleInput placeholder="Title" name="title" />
          {/* ----------------- body ----------------- */}
          <ReactQuill
            style={{ width: "100%", height: "600px", marginBottom: "60px" }}
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
export default CompanionWrite;
