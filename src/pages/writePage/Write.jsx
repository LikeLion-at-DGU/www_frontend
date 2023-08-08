// Write.jsx

import { PenImg } from "../../components/card/CardStyle";
import {
  PostWrapper,
  DetailWrapper,
  BtnWrapper,
} from "../recordPage/DetailStyle";
import {
  RegisterBtn,
  SaveBtn,
  RegisterImg,
  PostWriter,
  WriteWrapper,
  InputField,
  TitleInput,
  WriteBody,
  UproadImg,
  AddCardBtn,
  TopWriteWrapper,
} from "./WriteStyle";
import PenIMG from "../../image/pen.png";
import { Wrapper } from "../../components/WrapStyle";

const Write = () => {
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
              <SaveBtn>save</SaveBtn>
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
          <Wrapper>
            <UproadImg>
              추가
              <input
                type="file"
                name="chooseFile"
                accept="image/*"
                onchange="loadFile(this)"
                style={{ visibility: "hidden" }}
              />
            </UproadImg>
            <AddCardBtn>add card</AddCardBtn>
          </Wrapper>
          <WriteBody placeholder="Please enter the main content."></WriteBody>
        </form>
      </TopWriteWrapper>
    </>
  );
};

export default Write;
