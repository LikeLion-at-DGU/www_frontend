// Login.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from 'recoil'; // useRecoilValue 추가
import { userState } from "../../context/userState";
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
import axiosInstance from "../../../src/api/axios";

const Login = () => {
  const setUser = useSetRecoilState(userState);
  const user = useRecoilValue(userState); // userState 값 가져오기
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

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post("/accounts/testlogin");
      console.log("updated:", response.data);

      const userData = response.data.user; // 사용자 데이터 추출
      setUser(userData); // Recoil 상태 업데이트

      // access token을 localStorage에 저장
      const accessToken = response.data.token.access;
      localStorage.setItem("accessToken", accessToken);
      navigate("/")
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
          <form onSubmit={handleLogin}>
        <TestLoginWrapper>
          <LoginBtn onClick={handleGoogleLogin}>
            <i className="fab fa-google"></i> &nbsp;sign in with google
          </LoginBtn>
            <StartBtn type="submit">Test now!</StartBtn>
        </TestLoginWrapper>
          </form>
      </WhiteBox>
    </Container>
  );
};
{
  /* <LoginBtn onClick={() => window.location.href(url)}></LoginBtn> */
}
export default Login;
