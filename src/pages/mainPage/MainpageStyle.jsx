// MainpageStyle.jsx

import { styled, keyframes, css } from "styled-components";

export const MainContainer = styled.nav`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 60px;
  border: 3px solid;
`;

export const BackgroundImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 90px;
  object-fit: contain;
  opacity: 50%;
  z-index: -2;
`;

export const TextImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  border: 3px solid red;
  ${(props) => (props.fadeOut ? fadeOutAnimation : "")}
  img {
    width: 1100px;
    height: 380px;
  }
`;

// export const BottomContainer = styled.div`
//   position: relative;
//   display: flex;
//   width: 100%;
//   height: 100%;
//   justify-content: space-around;
//   border: 3px solid blue;
// `;

export const OneAndVote = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 6%;
  border: 3px solid orange;
`;

export const OneAndOnlyContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 30px;
  width: 510px;
  height: 455px;
  flex-wrap: wrap;
  border: 3px solid yellow;
`;

export const OneAndOnly = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  border: 3px solid green;
  img {
    display: flex;
    width: 44px;
    height: 30px;
    margin-top: 1%;
  }
  p {
    display: flex;
    margin-left: 3%;
    align-items: center;
    font-family: Roboto Mono;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    width: 40rem;
    height: 44px;
  }
`;

export const FriendData = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const Vote = styled.div`
  display: flex;
  width: 453px;
  height: 425px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 30px;
  position: relative;
  box-shadow: 0px 4px 4px 0px #00000040;
  flex-direction: column;
  border: 3px solid purple;
`;

export const ExampleImage = styled.div`
  width: 100%;
  height: 88%;
  display: flex;
  position: absolute;
  bottom: 0;
  opacity: 50%;
  background-image: url(/src/image/example.png);
  background-size: cover;
  background-position: center;
  border-top-style: solid;
  border-top-width: 3px;
  border-top-color: black;
`;

export const VoteTitle = styled.div`
  position: absolute;
  font-family: Roboto Mono;
  font-size: 26px;
  font-weight: 700;
  line-height: 57px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 3%;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
`;

export const VoteSubject = styled.div`
  position: absolute;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 50px;
  top: 65px;
  white-space: pre-wrap;
  p {
    font-family: Roboto Mono;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0em;
    padding: 1rem;
    width: 92%;
    height: 70%;
    text-align: center;
    white-space: pre-wrap;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  top: -55px;
  div {
    display: flex;
    align-items: center;
    position: relative;
  }
  input[type="radio"] {
    appearance: none;
    outline: none;
    width: 25px;
    height: 25px;
    border: 2px solid black;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    top: 38px;
    left: -7px;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: transparent;
    }
    &:checked::before {
      background-color: #2e74b5;
      width: 16px;
      height: 16px;
    }
  }
`;

export const CheckProperty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  top: 210px;
  p {
    display: flex;
    position: relative;
    justify-content: space-between;
    font-family: Roboto Mono;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    padding: 1rem;
    height: 60px;
    width: 290px;
    margin-top: 5px;
    left: 25px;
    align-items: center;
    background-color: #ffffff;
    border-radius: 8px;
    border: 2px solid black;
  }
`;

export const SignUp = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  justify-content: center;
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Roboto Mono;
    font-size: 14px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 10px;
  }
  span {
    font-size: 15px;
    font-weight: 700;
    color: #2e74b5;
  }
`;

//Buddy디자인
export const TravelContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid brown;
  padding: 6%;
  width: 100%;
  p {
    font-family: Roboto Mono;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    border: 3px solid gray;
    margin-bottom: 30px;
  }
`;

export const BuddyTitle = styled.div`
  font-family: Roboto Mono;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 5%;
  margin-top: 3%;
  border: 3px solid pink;
`;

export const Test = styled.div`
  display: flex;
  border: 3px solid yellow;
  ${(props) =>
    props.isEven &&
    css`
      justify-content: flex-end;
    `}
`;

export const TravelBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 453px;
  height: 110px;
  border-radius: 30px;
  background-color: #92d3f5;
  border: 3px solid red;
`;

export const IndexBox = styled.div`
  display: flex;
  /* border: 3px solid red; */
  justify-content: space-between;
  padding: 10px;
`;

export const WwwBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 220px;
`;

export const RecordCard = styled.div`
  display: flex;
  position: relative;
  width: 500px;
  height: 165px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
  /* border: 3px solid yellow; */
`;

// export const VoteContainer = styled.div`
//   position: relative;
//   display: flex;
//   width: 500px;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   border: 3px solid pink;
// `;

//Local pick 스타일
export const Local = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6%;
  border: 3px solid yellow;
  p {
    font-family: Roboto Mono;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    border: 3px solid gray;
  }
  span {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 2%;
  }
`;
