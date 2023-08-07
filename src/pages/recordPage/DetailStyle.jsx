import { styled } from "styled-components";

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
