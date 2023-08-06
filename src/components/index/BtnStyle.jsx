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
  width: 51px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #222;
  background: #fff;
  color: #f2c94c;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LikeStyle = styled(BookMarkStyle)`
  width: 80px;
  height: 40px;
  color: #f23a3a;
`;
export const ViewsStyle = styled(BookMarkStyle)`
  width: 95px;
  height: 40px;
  color: #2e74b5;
`;
export const CommentStyle = styled(BookMarkStyle)`
  width: 119px;
  height: 40px;
  color: #3ebd6b;
`;
export const BtnText = styled.span`
  color: #222;
`;
