import { styled } from "styled-components";

// Login Component 관련 styled component

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const WhiteBox = styled.div`
  display: flex;
  width: 548px;
  height: 588px;
  background-color: white;
  color: black;
  border: 2px solid #222222;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;

export const LogoImage = styled.img`
  width: 120px;
  height: auto;
  margin-top: 32px;
  margin-right: 340px;
`;

export const FakeButtonWrapper = styled.div`
  width: 385px;
  height: 64px;
  border: 2px solid #92d3f5;
  border-radius: 30px;
  cursor: pointer;
`;

export const Text = styled.p`
  font-family: "Roboto Mono";
  display: flex;
  margin-top: 32px;
  margin-right: 142px;
  font-size: 24px;
`;
// --------------

export const StartBtn = styled.button`
  margin: auto;
  font-family: "Roboto Mono";
  width: 385px;
  height: 64px;
  background-color: #92d3f5;
  color: #222222;
  border-radius: 30px;
  border: 1px solid var(--typoblack, #222);
  font-size: 20px;
  font-weight: 700;
  box-shadow: -5px 8px #222222;
`;
export const SigninTxt = styled.p`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;
export const SignLink = styled.span`
  color: #2e74b5;
`;
