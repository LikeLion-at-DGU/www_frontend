import styled, { keyframes } from "styled-components";

// Archive Component 관련 styled component
export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin: 0 150px;
  /* border: 3px solid red; */
`;

export const TopContainer = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* border: 3px solid orange; */
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
  margin-left: 32px;
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

export const MusicContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  /* border: 3px solid blue; */
  p {
    font-family: Roboto Mono;
    font-size: 17px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const Asap = styled.img`
  margin-top: 15px;
  width: 243px;
  height: 53px;
`;

export const PlayerContainer = styled.div`
  display: flex;
  position: relative;
  left: 90px;
  /* width: 243px; */
  justify-content: flex-end;
`;

export const Player = styled.img`
  margin-top: 15px;
  width: 156px;
  height: 272px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const CdImg = styled.img`
  position: relative;
  width: 107px;
  top: 30px;
  left: -132px;
  height: 109px;
  animation: ${spin} 8s linear infinite; /* spin 애니메이션 적용 */
`;

//MyFile 디자인
export const FileContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 60px;
  justify-content: center;
  align-items: center;
  /* border: 3px solid yellow; */
`;

export const StackedImages = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 947px;
  height: 406px;
  /* transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  } */
`;

export const SlideContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 947px;
  height: 360px;
  bottom: 0;
  z-index: 3;
  border: 3px solid red;
`;

export const ClickableImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClickableImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
  cursor: pointer;
  z-index: 1;
`;

export const SelectedImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
  filter: brightness(0.8);
  transform: translateY(-10px);
  z-index: 2;
`;

export const MyRecord = styled.p`
  display: flex;
  position: absolute;
  font-size: 16px;
  color: ${(props) => (props.selected ? "#333" : "#2E74B5")};
  z-index: 10;
  font-family: Roboto Mono;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  top: 12px;
  left: 28px;
  width: 140px;
  height: 40px;
`;

export const DailyRecord = styled.p`
  display: flex;
  position: absolute;
  font-size: 16px;
  color: ${(props) => (props.selected ? "#333" : "#2E74B5")};
  z-index: 10;
  font-family: Roboto Mono;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  top: 12px;
  left: 208px;
  width: 160px;
  height: 40px;
`;
export const DataCard = styled.p`
  display: flex;
  position: absolute;
  font-size: 16px;
  color: ${(props) => (props.selected ? "#333" : "#2E74B5")};
  z-index: 10;
  font-family: Roboto Mono;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  top: 12px;
  left: 420px;
  width: 140px;
  height: 40px;
`;
export const Companions = styled.p`
  display: flex;
  position: absolute;
  font-size: 16px;
  color: ${(props) => (props.selected ? "#333" : "#2E74B5")};
  z-index: 100;
  font-family: Roboto Mono;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  top: 12px;
  left: 613px;
  width: 140px;
  height: 40px;
`;
