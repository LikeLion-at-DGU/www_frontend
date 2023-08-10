import { styled } from "styled-components";

// join Component 관련 styled component

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const WhiteBox = styled.div`
  display: flex;
  width: 600px;
  height: 650px;
  /* 로그인 창은 크기 고정했음(상대크기X) */
  background-color: white;
  color: black;
  border: 2px solid #222222;
  border-radius: 20px;
  flex-direction: column;
  font-weight: bold;
`;

export const LogoImage = styled.img`
  width: 25%;
  height: auto;
  margin-top: 30px;
  margin-left: 40px;
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
  margin: 32px 0 50px 40px;
  font-size: 1.5rem;
`;

// login Component 관련 styled component

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60%;
`;

export const StartBtn = styled.button`
  font-family: "Roboto Mono";
  width: 385px;
  height: 64px;
  background-color: #92d3f5;
  color: #222222;
  border-radius: 30px;
  border: 1px solid #222222;
  box-shadow: -5px 5px #222222;
  font-size: 1.2rem;
  font-weight: 700;
  &:hover {
    box-shadow: none;
    position: relative;
    right: 5px;
    top: 5px;
  }
`;

export const SigninTxt = styled.p`
  font-family: "Roboto";
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 16px;
`;
export const SignLink = styled.span`
  color: #2e74b5;
  cursor: pointer;
`;

// detail Component 관련 styled component

export const JoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InputForm = styled.select`
  /* font-family: "Roboto"; */
  display: flex;
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 3px solid #222222;
  width: 350px;
  height: 7vh;
  text-align: center;
  font-size: 1rem;
`;

export const InputForm2 = styled.input`
  /* margin-top: 15px; */
  margin-left: 30px;
  padding-left: 30px;
  background-color: #ffffff;
  font-size: 1rem;
  color: #222222;
  width: 300px;
  height: 7vh;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #222222;
  box-shadow: -5px 5px #222222;
  ::placeholder {
    color: #848484;
  }
`;

export const JoinTxt = styled(SigninTxt)`
  width: 25vw;
  margin-bottom: 20px;
  color: #f23a3a;
`;

export const SigninBtn = styled(StartBtn)`
  width: 18vw;
  height: 7vh;
`;

export const Profile = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 1px solid #222222;
  background-color: #d9d9d9;
  margin-top: 30px;
  margin-right: 40px;
  text-align: center;
  font-size: 3rem;
  font-weight: 100;
  &:hover {
    background-color: #848484;
    color: #ffffff;
  }
`;
export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
