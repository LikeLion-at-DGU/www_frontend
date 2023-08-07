// BtnStyle

import styled from "styled-components";

export const BlueBtn = styled.div`
  background-color: rgba(146, 211, 245, 1);
  border: 1px solid black;
  border-radius: ${(props) => props.bdradius};
  width: 155px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Shadow = styled.div`
  position: absolute;
  bottom: -5px;
  left: -5px;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: black;
  border-radius: 40px;
`;
export const BookMarkStyle = styled.div`
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

export const BtnText = styled.span`
  color: #222;
`;
