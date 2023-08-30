// Join_.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  WhiteBox,
  LogoImage,
  Text,
  StartBtn,
  SigninTxt,
  SignLink,
  LoginWrapper,
} from "./LoginStyle";

const Join = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <WhiteBox>
        <LogoImage
          onClick={() => navigate("/")}
          src="src/image/logo.png"
          alt="logo"
        />
        <Text>www.(three w) ID creation</Text>
        <LoginWrapper>
          <StartBtn onClick={() => navigate("/input")}>
            <i className="fab fa-google"></i> &nbsp;start with google
          </StartBtn>
          <SigninTxt>
            Do you already have an ID?&nbsp;
            <SignLink onClick={() => navigate("/login")}>sign in</SignLink>
          </SigninTxt>
        </LoginWrapper>
      </WhiteBox>
    </Container>
  );
};
export default Join;
