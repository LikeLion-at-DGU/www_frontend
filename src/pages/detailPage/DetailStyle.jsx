import { styled } from "styled-components";
import { Writer } from "../recordPage/RecordStyle";

export const TopWrapper = styled.div`
  margin: 0 auto;
  width: 1122px;
`;
export const DetailWrapper = styled.div`
  font-family: "Roboto Flex";
  line-height: 1.5;
  width: 950px;
  margin: 0 auto;
  padding: 30px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 20px;
`;
export const BorderBottom = styled.div`
  width: 100%;
  border-bottom: 1px solid #000;
  justify-content: center;
`;
export const PostWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0;
`;

export const PostSubTitle = styled.p`
  width: 100%;
  text-align: center;
  padding: 15px;
  color: #000;
  font-family: "Roboto Mono";
  font-size: 1rem;
  font-weight: 700;
`;
export const PostTitle = styled(PostSubTitle)`
  font-size: 1.3rem;
`;
export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;
export const CenterWriter = styled(Writer)`
  justify-content: center;
  padding-bottom: 10px;
  width: 100%;
  border-bottom: 1px solid #222;
`;
export const Margin = styled.div`
  height: 100px;
`;
export const CompanionBody = styled.div`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 30px;
`;
export const BodyGuide = styled.p`
  color: #848484;
  margin: 50px 0 10px;
`;
export const BodyText = styled.p`
  color: #222;
  margin-bottom: 50px;
  :nth-last-child() {
    margin-bottom: 0;
  }
`;
export const AnotherTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: end;
  :last-child {
    font-size: 0.8em;
    color: #848484;
  }
`;