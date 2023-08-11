// Login.jsx

import React from "react";
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

const Login = () => {
  let navigate = useNavigate();

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
          <LoginBtn>
            <i className="fab fa-google"></i> &nbsp;sign in with google
          </LoginBtn>
        </LoginWrapper>
      </WhiteBox>
    </Container>
  );
};

export default Login;
