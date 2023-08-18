import { styled } from "styled-components";
import { ListTitle, Text } from "../recordPage/RecordStyle";
import { RegisterBtn } from "../writePage/WriteStyle";

export const CompanionContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
`;
export const CompanionList = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 836px; */
  /* margin-left: 286px; */
  width: 1122px;
  padding-left: 286px;
`;
export const Continents = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 227px;
  left: 155px;
  transition: top 0.5s ease-in-out;
  :hover {
    box-shadow: inset 0 3.5px 7px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
  }
`;
export const Continent = styled.button`
  font-size: 24px;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: #222222;
  width: fit-content;
  padding: 3px 5px;
  margin: 2.5px 0;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  &.active {
    box-shadow: 0 3.5px 7px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
  }
`;
export const ArrayChoices = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  align-items: center;
  :hover {
    color: #2e74b5;
  }
`;
export const ArrayChoice = styled.div`
  font-size: 14.6px;
  font-weight: 700;
  color: #848484;
  &.active {
    color: #2e74b5;
  }
`;

// SearchBar
export const SearchType = styled.div`
  width: 115px;
  height: 44px;
  border-top-left-radius: 17.5px;
  border-bottom-left-radius: 17.5px;
  border: 2px solid #222222;
  font-size: 17px;
  font-weight: 700;
  padding-left: 14px;
  display: flex;
  align-items: center;
  background-color: white;
`;

// Register 버튼
export const FixedBtnBox = styled.div`
  position: fixed;
  bottom: 50px;
  left: 154px;
`;

// CompanionCard
export const CompanionCard = styled.div`
  display: flex;
  flex-direction: column;
  /* width: ${(props) => (props.handlewidth ? props.handlewidth : "749px")}; */
  width: 749px;
  /* height: ${(props) => (props.handleheight ? props.handleheight : "124px")}; */
  height: 124px;
  background-color: #fbfbfb;
  justify-content: space-between;
  align-items: center;
  margin: 4.5px 0;
  z-index: 50;
`;
export const CompanionText = styled(Text)`
  justify-content: space-around;
`;
export const CompanionTitle = styled(ListTitle)`
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: space-between;
`;
