// Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  WhiteBox,
  LogoImage,
  Text,
  StartBtn,
  LoginWrapper,
  LoginBtn,
} from "./LoginStyle";
import axiosInstance from "../../../src/api/axios";

const Login = () => {
  let navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      // 구글 로그인 API 엔드포인트로 GET 요청을 보냄
      const response = await axiosInstance.post("/accounts/google/login/")

      // 응답을 받아온 후, 해당 URL로 리다이렉트
      // window.location.href = response.data.redirect_url;
      window.location.href = response.url;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  
  // const handleGoogleLogin = async () => {
  //   try {
  //     const response = await axiosInstance.get("/accounts/google/login"); // 해당 URL로 GET 요청
  //     // response.data를 사용하여 로그인 처리 또는 리다이렉트 등을 수행
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

    // 구글 로그인
    // const handleGoogleLogin = async () => {
    //   try {
    //     const response = await axiosInstance.get("/accounts/google/login", {
    //       method: "GET",
    //     });
    //     console.log(response);
    //     console.log(response.url);
  
    //     if (response.ok) {
    //       window.location.href = response.url;
    //     } else {
    //       console.error("Failed to initiate Google login");
    //     }
    //   } catch (error) {
    //     console.error("Error while initiating Google login", error);
    //   }
    // };


      // 구글 로그인
  // const handleGoogleLogin = async () => {
  //   try {
  //     const response = await fetch("/accounts/google/login", {
  //       method: "GET",
  //     });

  //     if (response.ok) {
  //       // window.location.href = response.url;
  //       window.location.href = "/dashboard";
  //     } else {
  //       console.error("Failed to initiate Google login");
  //     }
  //   } catch (error) {
  //     console.error("Error while initiating Google login", error);
  //   }
  // };

  // const handleGoogleLogin = async () => {
  //   try {
  //     const response = await axiosInstance.get("/accounts/google/login");
  //     if (response.data.success) {
  //       setLoggedIn(true); // 로그인 상태 업데이트
  //       // 로그인 상태에 따라 리다이렉트 또는 다른 동작 수행
  //       window.location.href = "/dashboard"; // 예시: 리다이렉트
  //     } else {
  //       console.error("Google login failed");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

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
            <i className="fab fa-google"></i> &nbsp;sign in with google
          </LoginBtn>
        </LoginWrapper>
      </WhiteBox>
    </Container>
  );
};

export default Login;