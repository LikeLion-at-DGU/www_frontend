import { styled } from "styled-components";

export const CardWrapper = styled.div`
  font-family: "Roboto";
  display: flex;
  width: 70%;
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

export const CardText = styled.div`
  padding: 10px 15px;
`;

export const CardWWW = styled.div`
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
