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
  const [id,setId] = useState("");
  const [pw,setPw] = useState("");

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
          <InputForm2
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
          />
          <StartBtn onClick={()=>navigate("/")}>
            {/* <LoginBtn onClick={handleGoogleLogin}> */}
            {/* <LoginBtn onClick={() => window.location.href(url)}> */}
            Test now!
          </StartBtn>
        </TestLoginWrapper>
      </WhiteBox>
    </Container>
  );
};
{
  /* <LoginBtn onClick={() => window.location.href(url)}></LoginBtn> */
}
export default TestLogin;
