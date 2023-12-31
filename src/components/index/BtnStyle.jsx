// BtnStyle

import styled from "styled-components";

export const BlueBtn = styled.div`
  background-color: rgba(146, 211, 245, 1);
  border: 1px solid black;
  border-radius: ${(props) => props.bdradius};
  width: 133px;
  height: 47.7px;
  font-size: 1rem;
  /* 16px */
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -5px 5px #222222;
  
  &:hover {
    box-shadow: none;
    position: relative;
    right: 5px;
    top: 5px;
  }
`;
export const BookMarkStyle = styled.button`
  width: ${(props) => (props.handlewidth ? props.handlewidth : "51px")};
  height: ${(props) => (props.handleheight ? props.handleheight : "40px")};
  font-size: ${(props) => (props.handlefsize ? props.handlefsize : "")};
  /* width: 51px;
  height: 40px; */
  border-radius: 20px;
  border: 2px solid #222;
  background: #fff;
  color: #f2c94c;
  display: flex;
  align-items: center;
  justify-content: center;

  position: ${(props) => (props.handleposi ? props.handleposi : "")};
  top: ${(props) => (props.handletop ? props.handletop : "")};
  right: ${(props) => (props.handleright ? props.handleright : "")};
`;
export const LikeStyle = styled(BookMarkStyle)`
  width: ${(props) => (props.handlewidth ? props.handlewidth : "80px")};
  height: ${(props) => (props.handleheight ? props.handleheight : "40px")};
  font-size: ${(props) => (props.handlefsize ? props.handlefsize : "")};
  /* width: 80px;
  height: 40px; */
  color: #f23a3a;
`;
export const ViewsStyle = styled(BookMarkStyle)`
  width: ${(props) => (props.handlewidth ? props.handlewidth : "95px")};
  height: ${(props) => (props.handleheight ? props.handleheight : "40px")};
  font-size: ${(props) => (props.handlefsize ? props.handlefsize : "")};
  /* width: 95px;
  height: 40px; */
  color: #2e74b5;
`;
export const CommentStyle = styled(BookMarkStyle)`
  width: ${(props) => (props.handlewidth ? props.handlewidth : "119px")};
  height: ${(props) => (props.handleheight ? props.handleheight : "40px")};
  font-size: ${(props) => (props.handlefsize ? props.handlefsize : "")};
  /* width: 119px;
  height: 40px; */
  color: #3ebd6b;
`;
export const FriendMarkStyle = styled(BookMarkStyle)`
  width: ${(props) => (props.handlewidth ? props.handlewidth : "69px")};
  height: ${(props) => (props.handleheight ? props.handleheight : "32px")};
  font-size: ${(props) => (props.handlefsize ? props.handlefsize : "")};
  /* width: 69px;
  height: 32px; */
  background: #92d3f5;
  color: #222;
  font-family: "Bungee Shade";
  font-weight: 400;
  margin-bottom: 10px;
`;
export const MineStyle = styled(BookMarkStyle)`
  width: ${(props) => (props.handlewidth ? props.handlewidth : "69px")};
  height: ${(props) => (props.handleheight ? props.handleheight : "32px")};
  font-size: ${(props) => (props.handlefsize ? props.handlefsize : "")};
  background-color: #f2c94c;
  color: #222;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const CountryStyle = styled(BookMarkStyle)`
  width: fit-content;
  height: ${(props) => (props.handleheight ? props.handleheight : "24px")};
  font-size: ${(props) => (props.handlefsize ? props.handlefsize : "")};
  background-color: #2e74b5;
  border-radius: 20px;
  border: 2px solid #222;
  color: #ffffff;
  font-weight: 400;
  padding: 10px 8px;
`;

export const CityStyle = styled(BookMarkStyle)`
  width: fit-content;
  height: ${(props) => (props.handleheight ? props.handleheight : "24px")};
  font-size: ${(props) => (props.handlefsize ? props.handlefsize : "")};
  background-color: #3ebd6b;
  border-radius: 20px;
  border: 2px solid #222;
  color: #ffffff;
  font-weight: 400;
  padding: 10px 8px;
`;

export const DateStyle = styled(BookMarkStyle)`
  width: fit-content;
  height: ${(props) => (props.handleheight ? props.handleheight : "24px")};
  font-size: ${(props) => (props.handlefsize ? props.handlefsize : "")};
  background-color: #8e44ad;
  border-radius: 20px;
  border: 2px solid #222;
  color: #ffffff;
  font-weight: 400;
  padding: 10px 8px;
`;

export const BtnText = styled.span`
  color: #222;
`;
export const EdDelbtnWrap = styled.div`
  position: absolute;
  top: -80px;
  right: -60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const EdDelbtn = styled.button`  
  width: 75px;
  height: 35px;
  font-size: 1.1rem;
  background-color: #fff;
  border: 1px solid #222;
  border-collapse: collapse;
  z-index: 10;
`;

export const HideWrapper = styled.div`
  position: relative;
`