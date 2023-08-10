import { styled } from "styled-components";
import { BlueBtn, BookMarkStyle } from "../../components/index/BtnStyle";

// Record 메인페이지 스타일
export const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5vw;
  margin: 0 auto;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexdirect};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.juscon};
  margin: 10px 0;
  /* border: 1px solid red; */
`;
export const Box2 = styled(Box)`
  justify-content: space-evenly;
  width: 1122px;
`;
export const Btn = styled(BlueBtn)`
  display: flex;
  border-radius: 10px;
  width: 262px;
  height: 51px;
  margin: 10px 0;
  font-size: 1.1rem;
  background-color: ${(props) => props.bgcol};
`;
export const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 15px 0;
  width: fit-content;
  align-items: center;
`;

// FriendCards 스타일, Cards 공통 스타일
export const FriendCard = styled.div`
  border-radius: 20px;
  width: 453px;
  /* 453px */
  height: 158px;
  /* 158px */
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
export const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 122px;
  overflow: hidden;
`;
export const Img = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) => props.radius};
  border-top-left-radius: ${(props) => props.leftradius};
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
`;
export const Writer = styled.p`
  /* position: relative; */
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  height: min-content;
  align-items: center;
`;
export const ProfileImg = styled.div`
  height: 100%;
  border: 1px solid black;
  border-radius: 15px;
  background-color: #3ebd6b;
  margin: 0 5px;
  padding: 10px;
`;
export const City = styled.p`
  font-size: 0.6rem;
  /* 10px */
  font-weight: 500;
  color: #8e44ad;
  padding-left: 30px;
`;
export const Title = styled.p`
  font-size: 1.25rem;
  /* 20px */
  font-weight: 500;
`;
export const Content = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: 400;
  height: ${(props) => props.height};
`;
export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.padding};
  justify-content: ${(props) => props.juscon};
`;
export const HashTag = styled.div`
  display: flex;
  background-color: #f2f2f2;
  color: #2e74b5;
  border-radius: 20px;
  font-size: 0.75rem;
  /* 12px */
  font-weight: 400;
  margin: 5px;
  padding: 5px;
`;

// TodayCards 스타일
export const TodayCard = styled(FriendCard)`
  width: 548px;
  height: 335px;
  position: relative;
`;
export const BigImage = styled(Image)`
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: ${(props) => props.rightradius};
  border-bottom-left-radius: ${(props) => props.leftradius};
`;
export const TodayTitle = styled.p`
  font-size: 1.5rem;
  /* 24px */
  font-weight: 700;
`;
export const TitleBox = styled(TagBox)`
  opacity: ${(props) => (props.isHovered ? 0 : 1)};
`;
export const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(242, 242, 242, 0.8);
  opacity: ${(props) => (props.isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

// ListCards 스타일
export const ListCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 1120px;
  height: 142px;
  background-color: #fbfbfb;
  justify-content: space-between;
  align-items: center;
`;
export const ListTitle = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  font-weight: 700;
  height: 25px;
`;
export const BtnBox = styled(TagBox)`
  /* height: 20px; */
  width: 150px;
`;
export const View = styled(BookMarkStyle)`
  width: 30%;
  /* 95px */
  height: 100%;
  /* 40px */
  color: #2e74b5;
`;
export const Comment = styled(BookMarkStyle)`
  width: 30%;
  height: 100%;
  color: #3ebd6b;
`;

// LocalPicks 스타일
export const LocalPick = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const InTagBox = styled(TagBox)`
  position: absolute;
  top: 15px;
  left: 15px;
`;
export const HoverOverlay2 = styled(HoverOverlay)`
  top: 186px;
  height: 60px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 18px 14px;
`;
