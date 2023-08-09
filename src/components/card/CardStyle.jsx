import { styled } from "styled-components";

export const CardWrapper = styled.div`
  font-family: "Roboto";
  display: flex;
  margin: 30px;
  width: 600px;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 23px 30px;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  color: #2e74b5;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const CardBorder = styled.div`
  display: flex;
  width: 100%;
  min-height: 70px;
  flex-direction: row;
  border-bottom: 1px solid #000;
`;

export const ImgCardBorder = styled(CardBorder)`
  justify-content: center;
  align-items: center;
`;

export const CardText = styled.div`
  padding: 10px 15px;
`;
export const CardInput = styled.input`
  padding: 10px 15px;
  border: 0;
  width: 70%;
`;

export const CardWWW = styled.div`
  padding: 10px 0;
  color: #000;
  font-family: "Bungee";
  font-size: 1.2rem;
  font-weight: 400;
`;
export const CardImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  padding: 15px;
`;
export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
`;
export const PenImg = styled.img`
  width :30px;
  height:30px;
`;
export const HashTag = styled.input`
  height: 90%;
  border-radius: 20px;
  background: #f2f2f2;
  text-align: center;
  border: 0;
  color: #2e74b5;
  margin-left: 20px;
  ::placeholder {
    color: #848484;
  }
`;
export const CardModal = styled(CardWrapper)`
  position: fixed;
  top: 100px;
  left: 28%;
`
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  min-height: 100vh;
  width: 100vw;
  padding: 0 25%;
  background-color: rgb(0 0 0 / 71%);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardSubmit = styled.button`
  border-radius: 10px;
  width: 100px;
  height: 40px;
  color: #222;
  margin: 0 10px;
  background-color: rgba(146, 211, 245, 1);
  border: 1px solid black;
  font-size: 1rem;
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