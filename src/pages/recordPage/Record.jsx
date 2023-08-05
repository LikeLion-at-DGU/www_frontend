// Record.jsx

import { RecordBox, RecordContainer } from "./RecordStyle";

const Record = () => {
  return (
    <RecordContainer>
      <p>설명글</p>
      <RecordBox FlexDirect="row">
        <RecordBox FlexDirect="column">
          <p>버튼 두개</p>
          <p>친구 최근글</p>
        </RecordBox>
        <RecordBox>오늘의 기록 랜덤</RecordBox>
      </RecordBox>
      <RecordBox>친구 최근글 나열</RecordBox>
      <RecordBox>secrets of local</RecordBox>
    </RecordContainer>
  );
};

export default Record;
