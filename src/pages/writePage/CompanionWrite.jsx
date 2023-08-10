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
import { useState, useRef } from "react";

const CompanionWrite = () => {
  const [images, setImages] = useState([]);
  const [where, setwhere] = useState("");
  const [when, setwhen] = useState("");
  const [what, setwhat] = useState("");

  const handleWhereChange = (event) => {
    setwhere(event.target.value);
  };
  const handleWhenChange = (event) => {
    setwhen(event.target.value);
  };
  const handleWhatChange = (event) => {
    setwhat(event.target.value);
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
  };

  return (
    <>
      <TopWriteWrapper>
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
              <RegisterBtn>
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
                  <input type="date" name="date" />
                </td>
                <td>Continent: </td>
                <td>
                  <select name="continent">
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
                  <select name="country">
                    <option value="none">--country--</option>
                    <option value="republic of korea">republic of korea</option>
                    <option value="republic of korea">republic of korea</option>
                  </select>
                </td>
                <td>City: </td>
                <td>
                  <input type="text" placeholder="--city--" />
                </td>
              </tr>
            </tbody>
          </Table>
          <TitleInput placeholder="Title" />
          {/* ----------------- body ----------------- */}
          <ReadOnly
            type="text"
            value="Necessary information!(Please write buttom questions.)"
            readOnly
          />
          <ReadOnly type="text" value="#Where we will meet?" readOnly />
          <InputData type="text" value={where} onChange={handleWhereChange} />
          <ReadOnly type="text" value="#When we will meet?" readOnly />
          <InputData type="text" value={when} onChange={handleWhenChange} />
          <ReadOnly type="text" value="#What we will do together?" readOnly />
          <InputData type="text" value={what} onChange={handleWhatChange} />
          {images.map((img, idx) => (
            <img key={idx} src={img} alt="post img" />
          ))}
        </form>
      </TopWriteWrapper>
    </>
  );
};
export default CompanionWrite;
