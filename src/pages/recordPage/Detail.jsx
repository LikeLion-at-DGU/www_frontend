// Detail.jsx

import { DetailWrapper } from "./DetailStyle";
import Card from "../../components/card/Card";

const Detail = () => {
  return (
    <DetailWrapper>
      <p>
        <img src="" alt="프로필" />
        user1<span>Korea/incheon</span>
      </p>
      <hr />
      <p>Date: 2023,3,August Weather: 너무 더워</p>
      <hr />
      <p>Title: 리스펙트 어짜구</p>
      <hr />
      <Card />
    </DetailWrapper>
  );
};

export default Detail;
