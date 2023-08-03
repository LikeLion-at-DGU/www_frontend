import { styled } from "styled-components";

// Login Component 관련 styled component

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgray;
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
  display: flex;
  margin-top: 32px;
  margin-right: 142px;
  font-size: 24px;
`;
