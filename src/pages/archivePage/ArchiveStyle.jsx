import { styled } from "styled-components";

// Archive Component 관련 styled component
export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin: 0 150px;
  border: 3px solid red;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border: 3px solid orange;
  margin-top: 70px;
`;

//ProfileCard 디자인
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-family: Roboto Mono;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 235px;
  height: 317px;
  padding: 10px;
  margin-top: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px #00000040;
  img {
    width: 215px;
    height: 215px;
  }
  p {
    margin-top: 13px;
    font-family: Roboto Mono;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #222222;
  }
  span {
    margin-top: 13px;
    font-family: Roboto Mono;
    font-size: 16px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #8e44ad;
  }
`;

//BuddyList 디자인
export const BuddyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  justify-content: flex-end;
  /* border: 3px solid blue; */
`;

export const BuddyBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 358px;
  height: 292px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px #00000040;
  background-color: #ffffff;
`;

export const BuddyBlueBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 358px;
  height: 62px;
  border-radius: 20px 20px 0px 0px;
  background-color: #92d3f5;
  /* border: 3px solid red; */
  p {
    font-family: Roboto Mono;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
  }
  span {
    font-family: Bungee Shade;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const AllData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BuddyDataContainer = styled.div`
  overflow-y: auto;
  max-height: 300px; /* 스크롤 최대 높이 설정 */
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1px;
  width: 356px;
  height: 46px;
  color: black;
  border: 0.6px solid #d9d9d9;
  background-color: #ffffff;
  overflow-y: auto; /* 추가: 스크롤 생성 */
  /* border: 3px solid orange; */
  img {
    display: flex;
    justify-content: flex-end;
    width: 5px;
    height: 20px;
  }
`;

export const ProfileImage = styled.div`
  height: 23px;
  width: 23px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: #3ebd6b;
  margin-left: 16px;
  /* border: 3px solid red; */
`;

export const UserName = styled.div`
  margin-left: 7px;
  width: 90px;
  font-family: Roboto Mono;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  /* border: 3px solid blue; */
`;
export const UserNC = styled.div`
  margin-left: 7px;
  display: flex;
  flex-direction: row;
  width: 190px;
  font-family: Roboto Mono;
  font-size: 10px;
  font-weight: 500;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #8e44ad;
  /* border: 3px solid yellow; */
`;

export const UserCountry = styled.div`
  display: flex;
  font-family: Roboto Mono;
  font-size: 10px;
  font-weight: 500;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #8e44ad;
`;
export const UserCity = styled.div`
  display: flex;
  font-family: Roboto Mono;
  font-size: 10px;
  font-weight: 500;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #8e44ad;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  /* border: 3px solid purple; */
  div {
    display: flex;
    justify-content: flex-end;
  }
`;

//MusicPlayer 디자인
export const MusicPlayer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 3px solid red;
`;

//Myfile 디자인
export const Image = styled.div`
  width: 947px;
  height: 415px;
`;
