// TestLogin.jsx

import React from "react"; // useEffect 삭제
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
  InputForm2,
} from "./LoginStyle";
import axiosInstance from "../../api/axios";
import instance from "../../api/axios";

const TestLogin = () => {
  const setUser = useSetRecoilState(userState);
  const user = useRecoilValue(userState); // userState 값 가져오기
  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/accounts/testlogin"
      );
      console.log("updated:", response.data);

      const userData = response.data.user; // 사용자 데이터 추출
      setUser(userData); // Recoil 상태 업데이트
      
      // access token을 localStorage에 저장
      const accessToken = response.data.token.access;
      localStorage.setItem('accessToken', accessToken);
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
          <form onSubmit={handleLogin}>
            <StartBtn type="submit">
              Test now!
            </StartBtn>
          </form>
        </TestLoginWrapper>
        {user && ( // Recoil 상태 값 사용
            <div>
                <p>{user.email}</p>
                <p>{user.nickname}</p>
                {/* 나머지 사용자 정보 표시 */}
            </div>
        )}
      </WhiteBox>
    </Container>
  );
};

export default TestLogin;
