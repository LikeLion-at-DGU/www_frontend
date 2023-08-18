// Login.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  WhiteBox,
  LogoImage,
  Text,
  StartBtn,
  LoginWrapper,
  LoginBtn,
  InputForm2,
} from "./LoginStyle";
import axiosInstance from "../../../src/api/axios";

const Login = () => {
  let navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);

  const url = "http://likelionwww.com/accounts/google/login/";

  const handleGoogleLogin = () => {
    window.location.href = url;
    // try {
    //   // 구글 로그인 API 엔드포인트로 GET 요청을 보냄
    //   const response = await axiosInstance.get("/accounts/google/login/", {
    //     headers: {
    //       // 추가한 부분: CORS 문제 해결을 위한 헤더 설정
    //       "Access-Control-Allow-Origin": "*", // 또는 허용하는 도메인을 지정
    //     },
    //   });

    //   console.log(response);

    //   // 응답을 받아온 후, 해당 URL로 리다이렉트
    //   window.location.href = response.url;
    // } catch (error) {
    //   console.error("Error:", error);
    // }
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
          Welcome Back!
          <br />
          Everybody needs your record!
        </Text>
        <LoginWrapper>
          <LoginBtn onClick={handleGoogleLogin}>
            {/* <LoginBtn onClick={() => window.location.href(url)}> */}
            <i className="fab fa-google"></i> &nbsp;sign in with google
          </LoginBtn>
        </LoginWrapper>
      </WhiteBox>
    </Container>
  );
};
{
  /* <LoginBtn onClick={() => window.location.href(url)}></LoginBtn> */
}
export default Login;
