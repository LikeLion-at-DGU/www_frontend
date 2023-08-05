// MainpageStyle.jsx

import { styled } from "styled-components";

export const MainContainer = styled.nav`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
  border: 3px solid red;
`;

export const BackgroundImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 90px;
  object-fit: contain;
  opacity: 60%;
  z-index: -1;
  border: 3px solid yellow;
`;

export const TextImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  img {
    width: 100%;
    height: auto;
  }
`;

export const BottomContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 3%;
  justify-content: space-around;
`;

export const OneAndOnlyContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 10%;
  width: 500px;
  flex-wrap: wrap;
  justify-content: space-between;
  /* border: 3px solid red; */
`;

export const OneAndOnly = styled.div`
  display: flex;
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

export const RecordCard = styled.div`
  display: flex;
  width: 455px;
  height: 158px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 25px;
  position: relative;
  box-shadow: 0px 4px 4px 0px #00000040;
  /* border: 3px solid blue; */
`;

export const VoteContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 10%;
  width: 500px;
  flex-wrap: wrap;
  justify-content: space-between;
  /* border: 3px solid brown; */
`;

export const Vote = styled.div`
  display: flex;
  width: 643px;
  height: 646px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 66px;
  position: relative;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: 3px solid purple;
`;
