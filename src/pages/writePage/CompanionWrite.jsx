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
import axiosInstance from "../../api/axios"

const CompanionWrite = () => {
  const dateRef = useRef();
  const quillRef = useRef();

  const [user, setUser] = useState("user");
  const [userInfo, setUserInfo] = useState("user info(Korea/incheon)");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [content, setContent] = useState(
    `<h2><span style="color: rgb(136, 136, 136);">Necessary information!(Please write buttom questions.)</span></h2><h2><span style="color: rgb(136, 136, 136);">#Where we will meet?</span></h2><h2><br></h2><h2><br></h2><h2><br></h2><h2><span style="color: rgb(136, 136, 136);">#When we will meet?</span></h2><h2><br></h2><h2><br></h2><h2><span style="color: rgb(136, 136, 136);">#What we will do together?</span></h2><h2><br></h2><h2>.</h2>`
  );

  // 동행 글 POST
  const handleSubmit = async (event) => {
    // event.preventDefault();

    try {
      const response = await axiosInstance.post("/api/companions/", {
        writer: 1,
        title: title,
        body: content,
        date: date,
        continent: continent,
        country: country,
        city: city,
      });

      console.log("Post created:", response.data);
      alert("동행글 포스트 완료!")
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
          [{ align: [] }, "link"],
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
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </td>
                <td>Continent: </td>
                <td>
                  <select
                    name="continent"
                    value={continent}
                    onChange={(e) => setContinent(e.target.value)}
                    required
                  >
                    <option value="none">--continent--</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="NorthAmerica">North America</option>
                    <option value="Oceania">Oceania</option>
                    <option value="SouthAmerica">South America</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>
                  <select
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option value="none">--country--</option>
                    <option value="RepublicOfKorea">republic of korea</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Greece">Greece</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="SouthAfrica">South Africa</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Germany">Germany</option>
                    <option value="Laos">Laos</option>
                    <option value="Russia">Russia</option>
                    <option value="Romania">Romania</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="USA">USA</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Brazil">Brazil</option>
                    <option value="SaudiArabia">Saudi Arabia</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Swiss">Swiss</option>
                    <option value="Spain">Spain</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Iceland">Iceland</option>
                    <option value="Ireland">Ireland</option>
                    <option value="UK">UK</option>
                    <option value="Austria">Austria</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Italia">Italia</option>
                    <option value="India">India</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="Canada">Canada</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Poland">Poland</option>
                    <option value="France">France</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Australia">Australia</option>
                  </select>
                </td>
                <td>City: </td>
                <td>
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="--city--"
                    required
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <TitleInput
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
            name="title"
            required
          />
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
