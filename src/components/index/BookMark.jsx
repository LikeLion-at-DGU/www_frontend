import { useState } from "react";
import { BookMarkStyle } from "./BtnStyle";

const BookMark = () => {
  const [mark, setMark] = useState(false);

  return (
    <BookMarkStyle onClick={() => setMark(mark ? false : true)}>
      {mark ? (
        <i className="fas fa-bookmark"></i>
      ) : (
        <i className="far fa-bookmark"></i>
      )}
    </BookMarkStyle>
  );
};

export default BookMark;
