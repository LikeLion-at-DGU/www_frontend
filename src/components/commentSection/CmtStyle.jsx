import { styled } from "styled-components";

export const Label = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 5vh;
  min-height: 45px;
  position: relative;
  margin: 30px 0;
`;

export const ApplyInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 2px solid #222;
  background: #fff;
  font-family: "Roboto Mono";
  font-size: 1rem;
  font-weight: 500;
  padding-left: 20px;
  ::placeholder {
    color: #848484;
  }
`;

export const ApplyBtn = styled.button`
  position: absolute;
  top: 7px;
  right: 30px;
  height: 70%;
  width: 70px;
  border-radius: 20px;
  border: 2px solid #222;
  color: #222;
  background: #fff;
`;

export const CmtBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 90px;
  border: 1px solid #848484;
  background: #f2f2f2;
  border-collapse: collapse;
  padding: 12px;
`;
export const CmtLabel = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  flex-direction: column;
`;
export const CmtProfile = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  font-weight: 500;
  font-size: 0.9rem;
  img {
    border-radius: 30px;
    border: 1px solid #222;
    background-color: #3ebd6b;
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
  p {
    font-family: "Roboto Mono";
  }
  span {
    color: #8e44ad;
    font-size: 0.9em;
  }
`;