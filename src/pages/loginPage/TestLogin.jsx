// Login.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  WhiteBox,
  LogoImage,
  Text,
  StartBtn,
  TestLoginWrapper,
  LoginBtn,
  InputForm2,
} from "./LoginStyle";
import axiosInstance from "../../api/axios";
import instance from "../../api/axios";
import { Margin } from "../detailPage/DetailStyle";

const TestLogin = () => {
  let navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/accounts/testlogin"
      );
      console.log("updated:", response.data);
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  return (
    <Container>
      <WhiteBox>
        <LogoImage
          onClick={() => navigate("/")}
          src="src/image/logo.png"
          alt="logo"
        />
        <Text>
          Welcome!
          <br />
          Everybody needs your record!
        </Text>
        <TestLoginWrapper>
          <form onSubmit={handleSubmit}>
            {/* <InputForm2
              type="text"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="input test ID"
            />
            <InputForm2
              type="password"
              name="pw"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="input test PW"
            /> */}
            <StartBtn type="submit" >
              {/* <LoginBtn onClick={handleGoogleLogin}> */}
              {/* <LoginBtn onClick={() => window.location.href(url)}> */}
              Test now!
            </StartBtn>
          </form>
        </TestLoginWrapper>
      </WhiteBox>
    </Container>
  );
};
{
  /* <LoginBtn onClick={() => window.location.href(url)}></LoginBtn> */
}
export default TestLogin;
