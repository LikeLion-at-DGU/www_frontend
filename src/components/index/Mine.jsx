import { MineStyle } from "./BtnStyle";

const Mine = (props) => {
  return (
    <MineStyle
      handlewidth={props.handlewidth}
      handleheight={props.handleheight}
      handlefsize={props.handlefsize}
    >
      mine
    </MineStyle>
  );
};

export default Mine;
