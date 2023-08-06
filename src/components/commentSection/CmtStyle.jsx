import { styled } from "styled-components";

export const Label = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 5vh;
  min-height: 45px;
  position: relative;
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
