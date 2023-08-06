import Card from "../components/card/Card";
import Like from "../components//index/Like";
import Views from "../components/index/Views";
import Comments from "../components/index/Comments";
import Detail from "./recordPage/Detail";
import BookMark from "../components/index/BookMark";

export const Test = () => {
  return (
    <>
      <Detail>
        <Card />
      </Detail>
      <BookMark />
      <Like />
      <Views />
      <Comments />
    </>
  );
};
