import { styled } from "styled-components";
import { BlueBtn } from "../../components/index/BtnStyle";
import { PenImg } from "../../components/card/CardStyle";
import { PostWrapper } from "../recordPage/DetailStyle";

export const WriteWrapper = styled(PostWrapper)`
  border-bottom: 1px solid #222;
  padding: 15px 0;
  margin: 0;
`;
export const SaveBtn = styled(BlueBtn)`
  border-radius: 10px;
  width: 100px;
  height: 40px;
  font-size: 1rem;
  margin: 0 10px;
`;
export const RegisterBtn = styled(SaveBtn)`
  background-color: #f2c94c;
  width: 140px;
`;

export const RegisterImg = styled(PenImg)`
  width: 25px;
  height: 25px;
`;
export const PostWriter = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 700;
  img {
    width: 25px;
    height: 25px;
    border-radius: 30px;
    border: 1px solid #222;
    background-color: #3ebd6b;
    margin-right: 10px;
  }
  span {
    color: #8e44ad;
    font-size: 0.8em;
  }
`;

export const InputField = styled.div`
  width: 100%;
  font-size: 1.1rem;
  font-weight: 700;
  border-bottom: 1px solid #222;
  padding: 15px 0;
`;
export const TitleInput = styled.input`
  font-size: 1.5rem;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #222;
  padding: 15px 0;
`;
export const WriteBody = styled.textarea`
    width: 100%;
    min-height: 500px;
    border: 0;
    resize: none;
`
export const UproadImg = styled.div`
  background-color: #2e74b5;
  color: #fff;
  width: 31px;
  height: 31px;
  border-radius: 5px;
  border: 1px solid #222;
`;
export const AddCardBtn = styled(UproadImg)`
  width: 31px;
  width: 115px;
`;