import { styled } from "styled-components";
import { BlueBtn } from "../../components/index/BtnStyle";
import { PenImg } from "../../components/card/CardStyle";
import { DetailWrapper, PostWrapper } from "../detailPage/DetailStyle";

export const TopWriteWrapper = styled(DetailWrapper)`
  margin: 30px auto;
  margin-bottom: 80px;
`;
export const WriteWrapper = styled(PostWrapper)`
  border-bottom: 1px solid #222;
  padding: 15px 0;
  margin: 0;
  width: 100%;
`;
export const SaveBtn = styled(BlueBtn)`
  border-radius: 10px;
  width: 130px;
  height: 40px;
  font-size: 1rem;
  color: #222;
  margin: 0 10px;
`;
export const RegisterBtn = styled.button`
  background-color: #f2c94c;
  border: 1px solid black;
  width: 140px;
  height: 40px;
  border-radius: 10px;
  font-size: 1rem;
  color: #222;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  box-shadow: -5px 5px #222222;
  &:hover {
    box-shadow: none;
    position: relative;
    right: 5px;
    top: 5px;
  }
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
  font-weight: 600;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #222;
  padding: 15px 0;
`;
export const WriteBody = styled.textarea`
    width: 100%;
    /* min-height: 500px; */
    border: 0;
    resize: none;
`
export const AddCardBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2e74b5;
  color: #fff;
  width: 125px;
  height: 31px;
  border-radius: 5px;
  border: 1px solid #222;
  `;
export const UproadImg = styled(AddCardBtn)`
  width: 34px;
  margin-right: 5px;
  span {
    padding-left: 5px;
  }
`;
export const BodySection = styled.div`
  min-height: 500px;
`
export const Table = styled.table`
  width: 100%;
  height: 80px;
  font-size: 1.1rem;
  font-weight: 700;
  border-bottom: 1px solid #222;
  margin-top: 15px;
  ::placeholder {
    text-align: center;
  }
  option {
    text-align: center;
  }
`;
export const ReadOnly = styled.input`
  width: 800px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #848484;
  margin: 10px;
  border: 0;
`;
export const InputData = styled.textarea`
  width: 100%;
  min-height: 100px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #222;
  border: 0;
  resize: none;
`;